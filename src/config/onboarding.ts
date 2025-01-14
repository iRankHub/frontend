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
                placement: 'bottom',
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
            },
            {
                id: 'tournaments-menu',
                title: 'Tournament Management',
                content: 'Click here to access tournament management. This is where you can create and manage debate tournaments, formats, and leagues.',
                targetSelector: 'tournaments-collapse-button',
                placement: 'right',
                order: 4,
                waitForAction: {
                    type: 'click',
                    message: 'Click to explore tournament options'
                }
            },
            {
                id: 'tournament-formats',
                title: 'Tournament Formats',
                content: 'Set up different debate formats like British Parliamentary, World Schools, or Policy Debate.',
                targetSelector: 'tournaments-formats-submenu',
                placement: 'right',
                order: 5
            },
            {
                id: 'tournament-leagues',
                title: 'League Management',
                content: 'Organize multiple tournaments into leagues or series for seasonal competitions.',
                targetSelector: 'tournaments-leagues-submenu',
                placement: 'right',
                order: 6
            },
            {
                id: 'tournament-create',
                title: 'Create Tournaments',
                content: 'Start setting up a new debate tournament with customizable settings and formats.',
                targetSelector: 'tournaments-create-submenu',
                placement: 'right',
                order: 7
            },
            {
                id: 'tournament-create',
                title: 'Create Tournaments',
                content: 'View all previous and upcoming tournaments.',
                targetSelector: 'tournaments-list-submenu',
                placement: 'right',
                order: 8
            },
            {
                id: 'users-section',
                title: 'User Management',
                content: 'Manage debaters, judges, and administrators. Handle user roles, permissions, and team assignments.',
                targetSelector: 'users',
                placement: 'right',
                order: 9
            },
            {
                id: 'reports-section',
                title: 'Reporting & Analytics',
                content: 'Access comprehensive tournament statistics, participant performance metrics, and generate detailed reports for your events.',
                targetSelector: 'reporting-&-analytics',
                placement: 'right',
                order: 10
            },
            {
                id: 'archives-section',
                title: 'Tournament Archives',
                content: 'Access historical tournament data, past results, and completed competition records.',
                targetSelector: 'archives',
                placement: 'right',
                order: 11
            },
            {
                id: 'notification-section',
                title: 'Notifications',
                content: 'View notifications of reminders, past events, etc...',
                targetSelector: 'notifications',
                placement: 'bottom',
                order: 12
            },
            {
                id: 'profile-section',
                title: 'Your Profile',
                content: 'Access your profile by clicking the image, name or dropdown.',
                targetSelector: 'profile',
                placement: 'bottom',
                order: 13
            }
        ]
    },
    '/admin/tournaments/formats': {
        id: '/admin/tournaments/formats',
        steps: [
            {
                id: 'formats',
                title: 'Tournament Formats',
                content: 'Here you can see all your active tournament formats.',
                targetSelector: 'tournament-formats',
                placement: 'bottom',
                order: 1
            },
            {
                id: 'add-format',
                title: 'Add New Formats',
                content: 'Here you can add new tournamet formats. A format can have a name, description and speakers!',
                targetSelector: 'add-format-button',
                placement: 'bottom',
                order: 2
            }
        ]
    },
    '/admin/tournaments/leagues': {
        id: '/admin/tournaments/leagues',
        steps: [
            {
                id: 'leagues',
                title: 'Tournament Leagues',
                content: 'Here you can see all your active tournament leagues.',
                targetSelector: 'tournament-leagues',
                placement: 'bottom',
                order: 1
            },
            {
                id: 'add-league',
                title: 'Add New League',
                content: 'Here you can add new tournamet leagues. A league can have a name, type and location.',
                targetSelector: 'add-league-button',
                placement: 'bottom',
                order: 2
            }
        ]
    },
    '/admin/tournaments/list': {
        id: '/admin/tournaments/list',
        steps: [
            {
                id: 'list',
                title: 'Tournaments List',
                content: 'Here you can see all your tournaments past and upcoming. Click the⋮ icon to view tournament.',
                targetSelector: 'tournament-list',
                placement: 'bottom',
                order: 1
            },
        ]
    },

    // volunteers onboarding
    '/volunteers/dashboard': {
        id: '/volunteers/dashboard',
        steps: [
            {
                id: 'dashboard',
                title: 'Tournaments Info',
                content: 'Here you can see all your tournaments analytics.',
                targetSelector: 'dashboard-analytics',
                placement: 'bottom',
                order: 1
            },
            {
                id: 'dashboard-current-rank',
                title: 'General Rank ',
                content: 'This stat shows you your current ranking. This shows how you performed this year.',
                targetSelector: 'dashboard-current-rank',
                placement: 'left',
                order: 2
            },
            {
                id: 'dashboard-performance-trend',
                title: 'General Rank ',
                content: 'This shows your overall performance. You can filter by month.',
                targetSelector: 'dashboard-performance-trend',
                placement: 'top',
                order: 3
            },
            {
                id: 'dashboard-volunteer-leaderboard',
                title: 'Current Year Volunteer leaderboard!',
                content: 'This shows the current leaderboard for volunteers.',
                targetSelector: 'dashboard-volunteer-leaderboard',
                placement: 'left',
                order: 4
            },
            {
                id: 'dashboard-volunteer-notification-section',
                title: 'Notifications',
                content: 'View notifications of reminders, past events, etc...',
                targetSelector: 'dashboard-volunteer-notifications',
                placement: 'bottom',
                order: 5
            },
            {
                id: 'dashboard-volunteer-profile-section',
                title: 'Your Profile',
                content: 'Access your profile by clicking the image, name or dropdown.',
                targetSelector: 'dashboard-volunteer-profile',
                placement: 'bottom',
                order: 6
            },
        ]
    },
    '/volunteers/tournaments': {
        id: '/volunteers/tournaments',
        steps: [
            {
                id: 'tournaments',
                title: 'Tournaments',
                content: 'Here you can see all your tournaments past and upcoming. Click the⋮ icon to view tournament.',
                targetSelector: 'tournament-list',
                placement: 'bottom',
                order: 1
            },
            {
                id: 'tournaments-filter-league',
                title: 'Tournaments Filters',
                content: 'If you want to see tournaments based on leagues, you can filter by clicking this Leagues button.',
                targetSelector: 'tournament-filter-league',
                placement: 'bottom',
                order: 2
            }
        ]
    },
};
