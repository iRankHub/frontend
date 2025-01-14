export type OnboardingStep = {
    id: string;
    title: string;
    content: string;
    targetSelector: string;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    order: number;
    waitForAction?: {
        type: 'click' | 'input' | 'custom';
        verificationFn?: () => boolean | Promise<boolean>;
        message?: string;
    };
}

export type PageConfig = {
    id: string;
    steps: OnboardingStep[];
}
