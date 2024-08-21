import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'irankHub',
    short_name: 'iRankHub',
    description: 'iRankHub is an end-to-end debate management platform designed to streamline the organization, execution, and analysis of debate tournaments. It aims to provide a centralized solution for all stakeholders involved, including administrators, schools, students, volunteers, and judges. The system will leverage modern technologies and best practices to deliver a seamless and efficient experience.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}