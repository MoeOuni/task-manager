import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge';
import { getReadableCategory, getReadableStatus, getStatusClasses } from '@/lib/utils';
import { Project } from '@/types';
import { projectCategories } from '@/lib/constants';
import dayjs from 'dayjs';
import { Button } from '../ui/button';
import { ArrowBigRightDash } from 'lucide-react';

/**
 * Props for the ProjectOverview component.
 * This type is a partial of Project.
 */
type Props = Partial<Project>;

const ProjectOverview = (props: Props) => {
  return (
    <Card className='bg-muted'>
        <CardHeader>
        <div className="flex flex-col  align-center gap-2">
          <div className="flex align-center">
            <Badge>
              {getReadableCategory(props?.category, projectCategories)}
            </Badge>
          </div>
          <CardTitle className='text-xl'>#{props.id} {props?.title}</CardTitle>
        </div>
        <div className="flex flex-row gap-4">
          <CardDescription>
            {dayjs(props?.createdAt).format("DD-MM-YYYY HH:mm")}
          </CardDescription>
          <Badge className={getStatusClasses(props?.status)}>
            {getReadableStatus(props?.status)}
          </Badge>
        </div>
        </CardHeader>
        <CardFooter>
          <Button variant={'outline'}>
           <div className='flex gap-2 items-center'> Procceed to Project <ArrowBigRightDash size={16} /></div>
          </Button>
        </CardFooter>
    </Card>
  )
}

export default ProjectOverview