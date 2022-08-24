import { useState } from 'react';
import type { ReactElement } from 'react';
import { Button } from '@components/button/button';
import { courseDetailsTabsHelper } from './course-details-tabs-helper';
import type { ICourseDetailsTabsState } from './course-details-tabs-interface';
import './course-details-tabs.scss';

const TABS: string[] = ['سرفصل', 'توضیحات', 'مدرس', 'نظرات'];

export function CourseDetailsTabs():ReactElement {
  const [state, setState] = useState<ICourseDetailsTabsState>({
    aciveTab: 'سرفصل',
  });

  const { aciveTab } = state;
  const helper = courseDetailsTabsHelper(state, setState);

  return (
    <div className="course-details-tab-container">
      {
        TABS.map((tab: string) => (
          <Button
            text={tab}
            backgroundColor={tab === aciveTab ? 'main' : 'white'}
            textColor={tab === aciveTab ? 'white' : 'default'}
            onClick={() => helper.setActiveTab(tab)}
            isDisabled={tab === aciveTab}
          />
        ))
    }
    </div>
  );
}
