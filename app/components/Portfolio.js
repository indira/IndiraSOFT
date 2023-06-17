import React, { useEffect } from "react"
import Page from "./Page"
import { Link } from "react-router-dom"

function Portfolio() {
  return (
    <Page title="Portfolio">
      <div className="generic-content-container mt-3 mb-3 ml-3 mr-3">
        <h2 className="text-center mb-3">Indira Pandey Portfolio</h2>
        <h4 className="text-center mb-3">Software Developer</h4>

        <dl>
          <dt>HIGHLIGHTS OF QUALIFICATIONS</dt>
          <dd>- 5+ years of experience in Software and Website Development.</dd>
          <dd>- Master’s Degree in Information Technology and a Bachelor’s degree in Computer Engineering</dd>
          <dd>- Intermediate knowledge of HTML, CSS, JavaScript, React, PHP, Java, MySQL, CMS, Git, Docker.</dd>
          <dd>- Experience as backend team lead driving brainstorming sessions.</dd>

          <dt className="mt-4 mb-4">EMPLOYMENT HISTORY</dt>
          <dt className="font-italic">Webmaster / Web Publisher, Jan 2013 – May 2022</dt>
          <dt className="font-weight-lighter font-italic">Canadian Association for Earthquake Engineering (CAEE), Vancouver BC</dt>
          <dd>- Developed the CAEE website using the Content Management System (Word Press). Worked as a webmaster for website maintenance, development, and new systems implementation. </dd>
          <dd>
            - Key project was the building of a search engine for the Conference Proceedings of a total of eleven Conferences conducted by CAEE. <br />
            <Link to="https://www.caee.ca/conferenceproceedings/" target="blank">
              https://www.caee.ca/conferenceproceedings/
            </Link>
          </dd>
          <dd>- Another key project was developing the CAEE membership and online membership application system.</dd>
          <dt className="font-italic">Software Developer, Sep 2016 – Jul 2017</dt>
          <dt className="font-weight-lighter font-italic">PBRV Consulting, Vancouver BC</dt>
          <dd>- Developed a user account login system in the WordPress platform for the use of a company that maintains customized client accounts for specialised services. </dd>
          <dd>- Developed the backend of a tool that computes site specific risk to hazard, the result of which is accessible to individual user through system log-in. The tool also performs data analysis and presents results of population use.</dd>
          <dt className="font-italic">Webcast Coordinator/End user support, Jan 2014 – Dec 2016</dt>
          <dt className="font-weight-lighter font-italic">Structural Engineers Association of BC (SEABC), Vancouver BC</dt>
          <dd>- Created the links for the live webcast of engineering courses provided by SEABC.</dd>
          <dd>- Set up the necessary hardware for the live streaming of courses.</dd>
          <dd>- Monitored, reported, and troubleshot technical difficulties.</dd>
          <dt className="font-italic">Software Developer (Consultant), Sep 2011 – May 2015</dt>
          <dt className="font-weight-lighter font-italic">Department of Civil Engineering, UBC, Vancouver BC</dt>
          <dt>Project I:</dt>
          <dt>Risk and Hazard Earthquake Analysis, Standalone Software, May 2014 – May 2015 </dt>
          <dd>- Developed, designed, and coded standalone software for Risk and Hazard Earthquake Analysis. </dd>
          <dd>- Used ArcGIS software to divide the maps of BC into grids.</dd>
          <dd>- Used Java to design and developed this application in NetBeans IDE.</dd>
          <dt>Project II:</dt>
          <dt>Seismic Signal Processing, Standalone Software, Sep 2011 – April 2013</dt>
          <dd>- Developed, designed, and coded standalone software for seismic signal processing that allows comparing the properties of earthquake records of bridges. </dd>
          <dd>- Used Java to design and developed this application in NetBeans IDE.</dd>
          <dt>Project III</dt>
          <dt>Website Development, Sep 2011 – Sep 2012</dt>
          <dt className="font-weight-lighter font-italic">Soil-Structure Interaction Program at UBC</dt>
          <dd>- Developed a dynamic, interactive, search engine enabled website for the Soil Structure Interaction (SSI) program. Administered the website. Site: (http://ssi-civil.sites.olt.ubc.ca) </dd>
          <dt>Project IV</dt>
          <dt>Website Development, Sep 2011 – Sep 2012</dt>
          <dd>- Designed and developed a website with a search engine for searching the data of the earthquake records for the bridges. </dd>
          <dt className="mt-4 mb-4">EDUCATION</dt>
          <dt>Cyber Foundations and Quality Assurance Testing, Jul 2021 – Nov 2021</dt>
          <dt className="font-weight-lighter font-italic">Retrain Canada School, Alberta, Canada </dt>
          <dt>Master’s Degree in Information Technology, Apr 2007 – Apr 2009 </dt>
          <dt className="font-weight-lighter font-italic">Kobe University, Japan </dt>
          <dt>Bachelor of Computer Engineering, Sep 2000 – Sep 2004 </dt>
          <dt className="font-weight-lighter font-italic">Pokhara University, Nepal</dt>
          <br />
          <dt>Professional Courses (Part-time studies) Udemy</dt>
          <dt className="font-weight-bold font-italic">Udemy</dt>
          <dd>- React For The Rest Of Us - Jan 2023 – Till Date</dd>
          <dd>
            - Git a Web Developer Job: Mastering the Modern Workflow - Mar 2022 – Aug 2022
            <br />
            <Link to="https://indira.github.io/travel-site" target="blank">
              https://indira.github.io/travel-site
            </Link>
          </dd>
          <dt className="font-weight-bold font-italic">British Columbia Institute of Technology, Vancouver, BC</dt>
          <dd>• Intro to JavaScript and jQuery (COMP 2015), Feb 2016 – Apr 2016 </dd>
          <dd>• Java Application Development (COMP 2613), Jan 2016 – Apr 2016</dd>
          <dd>• SQL Server 2008 Administration (COMP 4677), Jan 2013 – Apr 2013</dd>
          <dd>• Relational Database Design and SQL (COMP 1630), Jan 2012 – Mar 2012</dd>
          <dt className="mt-4 mb-4">VOLUNTEER EXPERIENCE</dt>
          <dt className="font-weight-bold font-italic">Web Developer (EWBI Canada), July 2022 – Till Date</dt>
          <dd>
            <Link to="https://www.ewbi-canada.org/" target="blank">
              https://www.ewbi-canada.org/
            </Link>
          </dd>
          <dt className="font-weight-bold font-italic">National Academy of Older Canadians Vancouver, Vancouver, BC Apr 2009 – Aug 2009</dt>
          <dd>• Instructor of Vista Basics, MAC, and MS Excel class.</dd>
        </dl>
      </div>
    </Page>
  )
}

export default Portfolio
