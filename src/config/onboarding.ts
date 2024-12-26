import { PageConfig } from '../types/onboarding';

export const onboardingConfig: Record<string, PageConfig> = {
    '/admin/dashboard': {
        id: '/admin/dashboard',
        steps: [
            {
                id: 'welcome',
                title: 'Welcome to Your Dashboard',
                content: 'This is your main dashboard where you can see all your important metrics.',
                targetSelector: 'dashboard-header',
                placement: 'top',
                order: 1
            },
            {
                id: 'user-insights',
                title: 'View user insights',
                content: 'Here you can see user insights. How many users irank has and how many tournament registrations happen in a certain range',
                targetSelector: 'dashboard-user-insights',
                placement: 'top',
                order: 2
            },
            {
                id: 'system-performance',
                title: 'System Performance',
                content: 'Here you can see how active the system is. You can see information about the cpu, ram and current storage. This lets you know if something is wrong or if everything is fine',
                targetSelector: 'dashboard-system-performance',
                placement: 'top',
                order: 3
            }
        ]
    },
    '/projects': {
        id: 'projects',
        steps: [
            {
                id: 'project-list',
                title: 'Your Projects',
                content: 'Here you can see all your active projects.',
                targetSelector: 'project-list',
                placement: 'top',
                order: 1
            },
            {
                id: 'project-filters',
                title: 'Filter Projects',
                content: 'Use these filters to find specific projects quickly.',
                targetSelector: 'project-filters',
                placement: 'right',
                order: 2
            }
        ]
    }
};
