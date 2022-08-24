/* eslint-disable max-len */
import type { ReactElement } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import './course-curriculum.scss';

export function CourseCurriculum():ReactElement {
  return (
    <div className="course-curriculum box">
      <h3 className="mb-4">سرفصل های دوره</h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            فصل اول : آشنایی بامبانی و مفاهیم اساسی React Js
            {' '}
            <span> 18 درس | 5 ساعت</span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                معرفی دوره جامع آموزش React Js
                <span>04:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                React چیست؟
                <span>10:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                نصب React
                <span>7:00</span>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            فصل دوم : ساخت Todo App
            {' '}
            <span> 4 درس | 1 ساعت</span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                معرفی دوره جامع آموزش React Js
                <span>04:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                React چیست؟
                <span>10:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                نصب React
                <span>7:00</span>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            فصل سوم : debugging(خطایابی) در react
            {' '}
            <span> 4 درس | 1.5 ساعت</span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                معرفی دوره جامع آموزش React Js
                <span>04:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                React چیست؟
                <span>10:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                نصب React
                <span>7:00</span>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            فصل چهارم : طراحی UI پروژه
            <span> 25 درس | 7 ساعت</span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                معرفی دوره جامع آموزش React Js
                <span>04:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                React چیست؟
                <span>10:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                نصب React
                <span>7:00</span>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
