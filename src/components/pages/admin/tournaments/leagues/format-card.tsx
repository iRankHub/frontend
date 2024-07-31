import { Icons } from '@/components/icons'
import React from 'react'

type Props = {}

function FormatCard({}: Props) {
  return (
    <div className='w-full border rounded-md border-gray-200 p-3 flex flex-col gap-4 cursor-pointer hover:shadow-lg'>
        <h3>World Schools Debate</h3>
        <p className='text-sm text-muted-text'>Description</p>
        <div className='flex items-center gap-4 justify-between'>
            <div className='flex items-center gap-3'>
                <Icons.users className='text-primary w-3.5 h-3.5' />
                <span className='text-muted-text text-sm'>21</span>
            </div>
            <Icons.expand className='w-3.5 h-3.5 text-primary' />
        </div>
    </div>
  )
}

export default FormatCard