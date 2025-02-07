import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import debounce from 'lodash/debounce';
import { useUserStore } from '@/stores/auth/auth.store';
import { getAllUsers } from '@/core/users/users';
import { sendInvitations } from '@/core/tournament/list';
import { UserSummary } from '@/lib/grpc/proto/user_management/users_pb';

export function InvitationDialog() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<UserSummary.AsObject[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<UserSummary.AsObject[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const params = useParams();
  const { user } = useUserStore((state) => state);
  const { toast } = useToast();

  const debouncedSearch = debounce(async (query: string) => {
    if (!user) return;
    if (!query) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const results = await getAllUsers({
        token: user.token,
        page: 1,
        pageSize: 10,
        searchQuery: query
      });
      setSearchResults(results.usersList || []);
    } catch (error) {
      console.error('Search failed:', error);
      toast({
        variant: "destructive",
        title: "Search failed",
        description: "Failed to fetch users. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  }, 300);

  useEffect(() => {
    debouncedSearch(searchQuery);
    return () => debouncedSearch.cancel();
  }, [searchQuery]);

  const handleSelectUser = (user: UserSummary.AsObject) => {
    if (!selectedUsers.find(u => u.userid === user.userid)) {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleRemoveUser = (userId: number) => {
    setSelectedUsers(selectedUsers.filter(u => u.userid !== userId));
  };

  const handleSendInvitations = async () => {
    if (!user) return;

    const tournamentId = Number(params.name);
    if (isNaN(tournamentId)) {
      toast({
        title: "Error",
        description: "Invalid tournament ID",
        variant: "destructive"
      });
      return;
    }
    setIsSending(true);

    try {
      const response = await sendInvitations({
        token: user.token,
        tournament_id: tournamentId,
        user_ids: selectedUsers.map(u => u.userid)
      });

      if (response.success) {
        if (response.failedUserIdsList && response.failedUserIdsList.length > 0) {
          // Some invitations failed
          const failedUsers = selectedUsers.filter(user =>
            response.failedUserIdsList.includes(user.userid)
          );
          const successCount = selectedUsers.length - failedUsers.length;

          toast({
            title: "Partial Success",
            description: `Successfully sent ${successCount} invitation${successCount !== 1 ? 's' : ''}. Failed to send to: ${failedUsers.map(u => getUserDisplayName(u)).join(', ')}`,
            variant: "warning" // uses new warning style with orange background
          });
        } else {
          // All invitations succeeded
          toast({
            title: "Success",
            description: `Successfully sent ${selectedUsers.length} invitation${selectedUsers.length !== 1 ? 's' : ''}.`,
            variant: "success"
          });
        }
        setOpen(false);
        setSelectedUsers([]);
        setSearchQuery('');
      } else {
        // Operation failed with message
        toast({
          title: "Failed to send invitations",
          description: "Failed to send invitations. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Failed to send invitations:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred while sending invitations.",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  const getUserDisplayName = (user: UserSummary.AsObject) => {
    return user.name || user.email || 'Unknown User';
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="h-8 px-2 lg:px-3"
      >
        Send Invitation
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Send Invitations</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />

            {selectedUsers.length > 0 && (
              <div className="flex flex-wrap gap-2 pb-4">
                {selectedUsers.map((user) => (
                  <Badge
                    key={user.userid}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {getUserDisplayName(user)}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => handleRemoveUser(user.userid)}
                    />
                  </Badge>
                ))}
              </div>
            )}

            <ScrollArea className="h-[200px] rounded-md border p-2">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  Loading...
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-2">
                  {searchResults.map((user) => (
                    <div
                      key={user.userid}
                      onClick={() => handleSelectUser(user)}
                      className="flex items-center justify-between p-2 rounded hover:bg-secondary cursor-pointer"
                    >
                      <div>
                        <div>{getUserDisplayName(user)}</div>
                        <div className="text-sm text-gray-500">{user.userrole}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : searchQuery ? (
                <div className="text-center text-gray-500">No results found</div>
              ) : (
                <div className="text-center text-gray-500">Type to search users</div>
              )}
            </ScrollArea>
          </div>

          <DialogFooter>
            <Button
              onClick={handleSendInvitations}
              disabled={selectedUsers.length === 0 || isSending}
            >
              {isSending ? "Sending..." : "Send Invitations"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
