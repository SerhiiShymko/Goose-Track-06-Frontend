import React from 'react';

import m1 from '../../images/mainPage/phohe/phone_calendar.png';
import m1Retina from '../../images/mainPage/phohe/phone_calendar@2x.png';
import t1 from '../../images/mainPage/tablet/tablet_calendar.png';
import t1Retina from '../../images/mainPage/tablet/tablet_calendar@2x.png';
import d1 from '../../images/mainPage/desktop/desktop_calendar.png';
import d1Retina from '../../images/mainPage/desktop/desktop_calendar@2x.png';

import m2 from '../../images/mainPage/phohe/phone_sidebar.png';
import m2Retina from '../../images/mainPage/phohe/phone_sidebar@2x.png';
import t2 from '../../images/mainPage/tablet/tablet_sidebar.png';
import t2Retina from '../../images/mainPage/tablet/tablet_sidebar@2x.png';
import d2 from '../../images/mainPage/desktop/desktop_sidebar.png';
import d2Retina from '../../images/mainPage/desktop/desktop_sidebar@2x.png';

import m3 from '../../images/mainPage/phohe/phone_all.png';
import m3Retina from '../../images/mainPage/phohe/phone_all@2x.png';
import t3 from '../../images/mainPage/tablet/tablet_all.png';
import t3Retina from '../../images/mainPage/tablet/tablet_all@2x.png';
import d3 from '../../images/mainPage/desktop/desktop_all.png';
import d3Retina from '../../images/mainPage/desktop/desktop_all@2x.png';

const Description = () => {
  return (
    <section>
      <ul>
        <li>
          <div>
            <div>
              <span>1.</span>
              <span>Calendar</span>
              <span>View</span>
            </div>
            <p>
              GooseTrack's Calendar view provides a comprehensive overview of
              your schedule, displaying all your tasks, events, and appointments
              in a visually appealing and intuitive layout.
            </p>
          </div>
          <div>
            <picture>
              <source
                srcSet={`${m1} 1x, ${m1Retina} 2x`}
                media="(max-width: 767px)"
              ></source>
              <source
                srcSet={`${t1} 1x, ${t1Retina} 2x`}
                media="(max-width: 1439px)"
              ></source>
              <source
                srcSet={`${d1} 1x, ${d1Retina} 2x`}
                media="(min-width: 1440px)"
              ></source>
              <img src={d1} alt="calendar"></img>
            </picture>
          </div>
        </li>
        <li>
          <div>
            <div>
              <span>2.</span>
              <span>Sidebar</span>
            </div>
            <p>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The "My Account" section allows you to manage your
              profile information and preferences, while the calendar provides a
              quick and convenient way to view your upcoming events and tasks.
            </p>
          </div>
          <div>
            <picture>
              <source
                srcSet={`${m2} 1x, ${m2Retina} 2x`}
                media="(max-width: 767px)"
              ></source>
              <source
                srcSet={`${t2} 1x, ${t2Retina} 2x`}
                media="(max-width: 1439px)"
              ></source>
              <source
                srcSet={`${d2} 1x, ${d2Retina} 2x`}
                media="(min-width: 1440px)"
              ></source>
              <img src={d2} alt="sidebar"></img>
            </picture>
          </div>
        </li>
        <li>
          <div>
            <div>
              <span>3.</span>
              <span>All in</span>
              <span>One</span>
            </div>
            <p>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </p>
          </div>
          <div>
            <picture>
              <source
                srcSet={`${m3} 1x, ${m3Retina} 2x`}
                media="(max-width: 767px)"
              ></source>
              <source
                srcSet={`${t3} 1x, ${t3Retina} 2x`}
                media="(max-width: 1439px)"
              ></source>
              <source
                srcSet={`${d3} 1x, ${d3Retina} 2x`}
                media="(min-width: 1440px)"
              ></source>
              <img src={d3} alt="all"></img>
            </picture>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Description;
