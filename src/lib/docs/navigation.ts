import {
    Users,
    Shield,
    GraduationCap,
    School,
    HeartHandshake,
    LucideIcon
} from 'lucide-react';

export type NavItem = {
    title: string;
    href: string;
    icon?: LucideIcon;
    description?: string;
    items?: NavItem[];
}

export const docsConfig: NavItem[] = [
    {
        title: "Getting Started",
        href: "/docs/authentication",
        icon: Shield,
        description: "Get started with iRankHub and learn how to create your account",
        items: [
            {
                title: "Introduction",
                href: "/docs/authentication#-introduction",
                description: "Learn about iRankHub and who can use it"
            },
            {
                title: "How to Join",
                href: "/docs/authentication#-how-to-join-irankhub",
                description: "Step by step guide to joining iRankHub"
            },
            {
                title: "Account Requirements",
                href: "/docs/authentication#-what-youll-need-to-sign-up",
                description: "Required information for different user types"
            },
            {
                title: "Profile Management",
                href: "/docs/authentication#-making-your-profile-your-own",
                description: "Customize and secure your profile"
            },
            {
                title: "Account Security",
                href: "/docs/authentication#-keeping-your-account-safe",
                description: "Best practices for account security"
            }
        ]
    },
    {
        title: "Administrator Guide",
        href: "/docs/admin",
        icon: Users,
        description: "Comprehensive guide for iRankHub administrators",
        items: [
            {
                title: "Dashboard Overview",
                href: "/docs/admin#-dashboard-overview",
                description: "Understanding the admin dashboard"
            },
            {
                title: "Tournament Management",
                href: "/docs/admin#-tournament-management",
                description: "Managing debate tournaments"
            },
            {
                title: "User Management",
                href: "/docs/admin#-user-management",
                description: "Managing platform users"
            },
            {
                title: "Reports and Archives",
                href: "/docs/admin#-reports-and-archives",
                description: "Accessing reports and archived data"
            }
        ]
    },
    {
        title: "Student Guide",
        href: "/docs/student",
        icon: GraduationCap,
        description: "Everything students need to know about using iRankHub",
        items: [
            {
                title: "Dashboard",
                href: "/docs/students#-your-dashboard",
                description: "Understanding your student dashboard"
            },
            {
                title: "Tournaments",
                href: "/docs/students#-tournament-section",
                description: "Participating in tournaments"
            },
            {
                title: "Feedback System",
                href: "/docs/students#-giving-feedback",
                description: "How to provide feedback to judges"
            }
        ]
    },
    {
        title: "School Guide",
        href: "/docs/schools",
        icon: School,
        description: "Guide for school administrators and coordinators",
        items: [
            {
                title: "Getting Started",
                href: "/docs/schools#-getting-started",
                description: "Setting up your school account"
            },
            {
                title: "Team Management",
                href: "/docs/schools#-team-management",
                description: "Managing debate teams"
            },
            {
                title: "Tournament Participation",
                href: "/docs/schools#-tournament-participation",
                description: "Participating in tournaments"
            }
        ]
    },
    {
        title: "Volunteer Guide",
        href: "/docs/volunteers",
        icon: HeartHandshake,
        description: "Complete guide for volunteer judges",
        items: [
            {
                title: "Dashboard",
                href: "/docs/volunteers#-your-dashboard",
                description: "Understanding your volunteer dashboard"
            },
            {
                title: "Tournament Participation",
                href: "/docs/volunteer#-tournament-participation",
                description: "Managing your judging responsibilities"
            },
            {
                title: "Ballot Management",
                href: "/docs/volunteers#-ballots",
                description: "How to submit and manage ballots"
            },
            {
                title: "Student Feedback",
                href: "/docs/volunteers#-student-feedback",
                description: "Viewing and understanding student feedback"
            }
        ]
    }
];

export const getNavItemByPath = (path: string): NavItem | undefined => {
    const flattenItems = (items: NavItem[]): NavItem[] => {
        return items.reduce((acc: NavItem[], item) => {
            if (item.items) {
                return [...acc, item, ...flattenItems(item.items)];
            }
            return [...acc, item];
        }, []);
    };

    const flattenedItems = flattenItems(docsConfig);
    return flattenedItems.find(item => item.href === path);
};

export const getCategoryItems = (category: string): NavItem[] | undefined => {
    return docsConfig.find(item => item.href === `/docs/${category}`)?.items;
};
