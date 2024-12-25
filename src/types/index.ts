export enum UserRole {
    STUDENT = "student",
    SCHOOL = "school",
    VOLUNTEER = "volunteer",
    ADMIN = "admin"
}

export interface LoginResponse {
    token: string;
    userid: string;
    success: boolean;
    status: string;
    message: string;
    requirePasswordReset: string;
    requireTwoFactor: string;
    userrole: "school" | "student" | "volunteer" | "admin"
}

export interface Iparms {
    params: {
        name: string;
    };
}

export type LinodeFolderType = "tournaments" | "profile";


export type Position = 'top' | 'right' | 'bottom' | 'left';

export interface OnboardingStep {
    targetId: string;
    title: string;
    description: string;
    position?: Position;
    route?: string; // Optional route to navigate to
    waitForElement?: boolean; // Whether to wait for element to be visible
}

export interface TooltipProps extends OnboardingStep {
    onNext: () => void;
    onPrevious: () => void;
    onSkip: () => void;
    isFirst: boolean;
    isLast: boolean;
    sidebarOpen?: boolean;
}

export interface HighlightOverlayProps {
    targetId: string;
    sidebarOpen?: boolean;
}
