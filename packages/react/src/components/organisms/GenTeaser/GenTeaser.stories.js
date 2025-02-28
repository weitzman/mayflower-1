import React from 'react';
import { StoryPage } from 'StorybookConfig/preview';
import { action } from '@storybook/addon-actions';
import buttonOptions from 'MayflowerReactButtons/Button/Button.knobs.options';
import IconCatalog from 'MayflowerReactBase/Icon/IconCatalog';
import IconData from 'MayflowerReactBase/Icon/IconData';
import GenTeaser from './index';
import GenTeaserDocs from './GenTeaser.md';
import placeholder from '@massds/mayflower-assets/static/images/placeholder/100x100.png';
import GenTeaserContainer from "./GenTeaserContainer";
import GenTeaserDetails from "./GenTeaserDetails";
import GenTeaserTitle from "./GenTeaserTitle";
import GenTeaserDescription from "./GenTeaserDescription";
import GenTeaserStat from "./GenTeaserStat";
import GenTeaserEyebrow from "./GenTeaserEyebrow";
import GenTeaserEmphasis from "./GenTeaserEmphasis";
import GenTeaserDate from "./GenTeaserDate";
import GenTeaserOrgs from "./GenTeaserOrgs";
import GenTeaserSearchBar from "./GenTeaserSearchBar";
import GenTeaserSubLinks from "./GenTeaserSubLinks";
import GenTeaserKeyAction from "./GenTeaserKeyAction";
import GenTeaserButton from "./GenTeaserButton";
import GenTeaserTags from "./GenTeaserTags";
import GenTeaserMoreInfo from "./GenTeaserMoreInfo";
import GenTeaserPrimaryInfo from "./GenTeaserPrimaryInfo";
import GenTeaserPhone from "./GenTeaserPhone";
import GenTeaserSecondaryInfo from "./GenTeaserSecondaryInfo";
import GenTeaserInfoDetails from "./GenTeaserInfoDetails";
import GenTeaserAddress from "./GenTeaserAddress";
import GenTeaserEmail from "./GenTeaserEmail";
import GenTeaserEvent from "./GenTeaserEvent";
import GenTeaserImage from "./GenTeaserImage";

export const GenTeaserExample = (args) => (
  <GenTeaserContainer>
    <GenTeaserDetails>
      <GenTeaserTitle title={args.title} />
      <GenTeaserDescription description={args.description} />
    </GenTeaserDetails>
  </GenTeaserContainer>
);
GenTeaserExample.storyName = 'Default';
GenTeaserExample.args = {
  title: {
    info: 'Title info here',
    text: 'Basic Search Result',
    href: '#',
    showFileIcon: false
  },
  description: 'A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in <b>writing dealing with a particular</b> point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.'
};
GenTeaserExample.parameters = {
  docs: {
    page: () => <StoryPage StoryComponent={GenTeaserExample} Description={GenTeaserDocs} />
  }
};
export const GenTeaserDataCatalog = (args) => (
  <GenTeaserContainer>
    <GenTeaserDetails>
      <GenTeaserStat>{args.stat}</GenTeaserStat>
      <GenTeaserEyebrow eyebrow={args.eyebrow} />
      <GenTeaserTitle title={args.title} />
      <GenTeaserEmphasis>
        <GenTeaserDate date={args.date} />
        <GenTeaserOrgs orgs={args.orgs} />
      </GenTeaserEmphasis>
      <GenTeaserDescription description={args.description} />
      <GenTeaserSearchBar search={args.search} />
      <GenTeaserSubLinks>
        {args.subLinks.map((item) => <GenTeaserKeyAction {...item} />)}
      </GenTeaserSubLinks>
    </GenTeaserDetails>
  </GenTeaserContainer>
);
GenTeaserDataCatalog.storyName = 'GenTeaser as DataCatalog';
GenTeaserDataCatalog.args = {
  title: {
    info: 'Title info here',
    text: 'School and District Profiles',
    href: 'http://profiles.doe.mass.edu/',
    showFileIcon: false
  },
  description: 'The Massachusetts Department of Early and Seconday Education\'s school and district profile exploration tool.',
  subLinks: [{
    text: 'Teacher Salaries Report',
    href: 'http://profiles.doe.mass.edu/statereport/teachersalaries.aspx',
    description: 'Total teaching salaries, divided by the number of full-time equivalent teachers, equals the average teacher salary.'
  }, {
    text: 'MCAS Achievement Results',
    href: 'http://profiles.doe.mass.edu/statereport/mcas.aspx',
    description: 'This report contains results for legacy MCAS only.'
  }, {
    text: 'Next Generation MCAS Achievement Results',
    href: 'http://profiles.doe.mass.edu/statereport/nextgenmcas.aspx',
    description: 'This report contains results for Next Generation MCAS only.'
  }, {
    text: 'Per Pupil Expenditures',
    href: 'http://profiles.doe.mass.edu/statereport/ppx.aspx',
    description: "Per pupil expenditures are calculated by dividing a district's operating costs by its average pupil membership (FTEs), including in-district expenditures per pupil and total expenditures per pupil, which includes in-district and out-of-district spending and enrollment."
  }],
  date: '01/01/2019',
  orgs: 'Massachusetts Department of Early and Seconday Education',
  search: {
    placeholder: 'search profiles.doe.mass.edu...',
    target: 'http://profiles.doe.mass.edu/search/search_new.aspx?leftNavId=11241',
    queryInput: '',
    id: 'jahdfjadh'
  },
  stat: (
    <span>
      <span>Total Items:</span>
      <span>&nbsp;</span>
      <strong>143</strong>
    </span>
  ),
  eyebrow: (
    <>
      <IconCatalog width={16} height={16} />
      <span>Data Catalog</span>
    </>
  )
};
GenTeaserDataCatalog.parameters = {
  docs: {
    page: () => <StoryPage StoryComponent={GenTeaserDataCatalog} Description={GenTeaserDocs} />
  }
};
export const GenTeaserDataSet = (args) => (
  <GenTeaserContainer onClick={(e) => action(e)} onKeyDown={(e) => action(e)}>
    <GenTeaserDetails>
      <GenTeaserEyebrow eyebrow={args.eyebrow} />
      <GenTeaserButton button={args.button} />
      <GenTeaserTitle title={args.title} />
      <GenTeaserEmphasis>
        <GenTeaserDate date={args.date} />
        <GenTeaserOrgs orgs={args.orgs} />
      </GenTeaserEmphasis>
      <GenTeaserDescription description={args.description} />
      <GenTeaserTags tags={args.tags} />
    </GenTeaserDetails>
  </GenTeaserContainer>
);
GenTeaserDataSet.storyName = 'GenTeaser as Dataset';
GenTeaserDataSet.args = {
  title: {
    info: 'This is the info',
    text: 'Deer harvest data',
    href: 'https://www.mass.gov/service-details/deer-harvest-data',
    showFileIcon: false
  },
  description: 'Review the recent white-tailed deer harvest data before heading out to hunt. Though Massachusetts is the 3rd most densely populated state in the country, it is a state where quality deer can be found anywhere. MassWildlife biologists estimate that there are over 100,000 deer statewide. Estimated densities range from about 12-18 per square mile in western and central Massachusetts to over 50 deer per square mile on Martha\'s Vineyard and Nantucket Islands, and certain areas of eastern MA where hunting access is restricted.',
  eyebrow: (
    <>
      <IconData width={16} height={16} />
      <span>Dataset</span>
    </>
  ),
  date: '01/01/2019',
  orgs: 'Division of Fisheries and Wildlife, Executive Office of Energy and Environmental Affairs',
  tags: ['kml', 'xls', 'json', 'csv'],
  button: {
    text: 'Show Details',
    usage: 'secondary',
    theme: 'c-primary'
  }
};
GenTeaserDataSet.argTypes = {
  usage: {
    control: {
      type: 'select',
      options: buttonOptions.usage
    }
  },
  theme: {
    control: {
      type: 'select',
      options: buttonOptions.theme
    }
  }
};
GenTeaserDataSet.parameters = {
  docs: {
    page: () => <StoryPage StoryComponent={GenTeaserDataSet} Description={GenTeaserDocs} />
  }
};
export const GenTeaserDataDownload = (args) => (
  <GenTeaserContainer>
    <GenTeaserDetails>
      <GenTeaserTitle title={args.title} />
      <GenTeaserEmphasis>
        <GenTeaserDate date={args.date} />
        <GenTeaserOrgs orgs={args.orgs} />
      </GenTeaserEmphasis>
      <GenTeaserDescription description={args.description} />
    </GenTeaserDetails>
  </GenTeaserContainer>
);
GenTeaserDataDownload.storyName = 'GenTeaser as Data Download';
GenTeaserDataDownload.args = {
  title: {
    info: 'This is the info',
    text: '2015 Monthly Electric Customer Migration Data',
    href: 'https://www.mass.gov/files/documents/2018/06/15/2015%20Annual%20Electric%20Monthly%20Migration-Complete.xlxs',
    icon: 'IconDownload',
    showFileIcon: true,
    details: '(30 MB)'
  },
  description: 'Jun 15, 2018 <b>...</b> <b>Annual Electric</b>. <b>Migration</b>. 2,015,302. 18,322,632,032. 758,696 .... <b>Monthly</b>  Competitive Supply Load Served (2015). State. Lg C &amp; I. Med C &amp; I.',
  date: 'Updated on 9/06/2019',
  orgs: 'Department of Public Health, Executive Office of Health and Human Services'
};
GenTeaserDataDownload.parameters = {
  docs: {
    page: () => <StoryPage StoryComponent={GenTeaserDataDownload} Description={GenTeaserDocs} />
  }
};
export const GenTeaserNews = (args) => (
  <GenTeaserContainer>
    <GenTeaserDetails>
      <GenTeaserEyebrow eyebrow={args.eyebrow} />
      <GenTeaserTitle title={args.title} />
      <GenTeaserEmphasis>
        <GenTeaserDate date={args.date} />
        <GenTeaserOrgs orgs={args.orgs} />
      </GenTeaserEmphasis>
      <GenTeaserDescription description={args.description} />
    </GenTeaserDetails>
  </GenTeaserContainer>
);
GenTeaserNews.storyName = 'GenTeaser as News';
GenTeaserNews.args = {
  title: {
    info: 'This is the info',
    text: 'State public health officials announce two new confirmed human cases of EEE',
    href: 'https://www.mass.gov/news/state-public-health-officials-announce-two-new-confirmed-human-cases-of-eee',
    showFileIcon: false
  },
  eyebrow: 'Press Release',
  description: 'The Massachusetts Department of Public Health (DPH) today announced that laboratory testing has confirmed two new cases of Eastern ...',
  date: '9/06/2019',
  orgs: 'Bureau of Substance Addiction Services, Department of Mental Health, Department of Public Health, Executive Office of Health and Human Services'
};
GenTeaserNews.parameters = {
  docs: {
    page: () => <StoryPage StoryComponent={GenTeaserNews} Description={GenTeaserDocs} />
  }
};
export const GenTeaserLawsRegs = ({regulation, law}) => (
  <React.Fragment>
    <GenTeaserContainer>
      <GenTeaserDetails>
        <GenTeaserEyebrow eyebrow={regulation.eyebrow} />
        <GenTeaserTitle title={regulation.title} />
        <GenTeaserEmphasis>
          <GenTeaserDate date={regulation.date} />
          <GenTeaserOrgs orgs={regulation.orgs} />
        </GenTeaserEmphasis>
        <GenTeaserDescription description={regulation.description} />
      </GenTeaserDetails>
    </GenTeaserContainer>
    <GenTeaserContainer>
      <GenTeaserDetails>
        <GenTeaserEyebrow eyebrow={law.eyebrow} />
        <GenTeaserTitle title={law.title} />
        <GenTeaserEmphasis>
          <GenTeaserDate date={law.date} />
          <GenTeaserOrgs orgs={law.orgs} />
        </GenTeaserEmphasis>
        <GenTeaserDescription description={law.description} />
        <GenTeaserSubLinks>
          <GenTeaserKeyAction
            text="Search Sections within this Chapter"
            href="http://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93"
          />
          <GenTeaserKeyAction
            text="Search for General Laws"
            href="http://malegislature.gov/Laws/GeneralLaws"
          />
        </GenTeaserSubLinks>
      </GenTeaserDetails>
    </GenTeaserContainer>
  </React.Fragment>
);
GenTeaserLawsRegs.storyName = 'GenTeaser  as Laws and Regs';
GenTeaserLawsRegs.args = {
  regulation: {
    title: {
      info: 'This is the info',
      text: '101 CMR 350.00: Home Health Services',
      href: 'https://www.mass.gov/regulations/101-CMR-35000-home-health-services',
      showFileIcon: false
    },
    eyebrow: 'Regulation',
    description: 'This is an unofficial version of Commonwealth regulations and is posted here for the convenience of the public. It is not an official statement of the regulations.',
    date: '7/12/2019',
    orgs: 'Executive Office of Health and Human Services'
  },
  law: {
    title: {
      info: 'This is the info',
      text: 'General Law - Part I, Title XV, Chapter 93, Section 78',
      href: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93/Section78',
      showFileIcon: false
    },
    eyebrow: 'General Law',
    description: "''Contract for health club services'', a contract which has the primary purpose of providing a person with the right to use the facilities of a health club or with ..",
    date: '7/13/2019',
    orgs: 'Massachusetts Legislature'
  }
};
GenTeaserLawsRegs.parameters = {
  docs: {
    page: () => <StoryPage StoryComponent={GenTeaserLawsRegs} Description={GenTeaserDocs} />
  }
};
export const GenTeaserServices = (service) => (
  <GenTeaserContainer>
    <GenTeaserDetails>
      <GenTeaserTitle title={service.title} />
      <GenTeaserDescription description={service.description} />
      <GenTeaserSubLinks>
        <GenTeaserKeyAction
          text="Apply for SNAP benefits (food stamps)"
          href="https://www.mass.gov/how-to/apply-for-snap-benefits-food-stamps"
        />
        <GenTeaserKeyAction
          text="Snap Outreach For Partners"
          href="https://www.mass.gov/service-details/snap-outreach-for-partners"
        />
        {service.subLinks.map((link, linkIndex) => <GenTeaserKeyAction key={`GenTeaser.KeyAction.${link.text}}`} {...link} />)}
      </GenTeaserSubLinks>
    </GenTeaserDetails>
  </GenTeaserContainer>
);
GenTeaserServices.storyName = 'GenTeaser as Services';
GenTeaserServices.args = {
  title: {
    info: 'This is the info',
    text: 'SNAP outreach',
    href: 'https://www.mass.gov/snap-outreach',
    showFileIcon: false
  },
  eyebrow: 'General Law',
  description: 'If you are a client, you can get help with you SNAP case and benefits through a SNAP outreach partner. You can find SNAP outreach ... Contact Information ...',
  subLinks: [
    {
      text: 'Apply for SNAP benefits (food stamps)',
      href: 'https://www.mass.gov/how-to/apply-for-snap-benefits-food-stamps'
    },
    {
      text: 'Snap Outreach For Partners',
      href: 'https://www.mass.gov/service-details/snap-outreach-for-partners'
    }
  ]
};
GenTeaserServices.parameters = {
  docs: {
    page: () => <StoryPage StoryComponent={GenTeaserServices} Description={GenTeaserDocs} />
  }
};
export const GenTeaserStateOrg = ({ stateOrg }) => (
  <GenTeaserContainer>
    <GenTeaserDetails>
      <GenTeaserTitle title={stateOrg.title} />
      <GenTeaserDescription description={stateOrg.description} />
      <GenTeaserMoreInfo>
        <GenTeaserPrimaryInfo>
          <GenTeaserPhone {...stateOrg.phone} />
          <GenTeaserInfoDetails {...stateOrg.locations} />
        </GenTeaserPrimaryInfo>
        <GenTeaserSecondaryInfo>
          <GenTeaserEmail {...stateOrg.email} />
          <GenTeaserInfoDetails {...stateOrg.infodetails} />
        </GenTeaserSecondaryInfo>
      </GenTeaserMoreInfo>
    </GenTeaserDetails>
  </GenTeaserContainer>
);
GenTeaserStateOrg.storyName = 'GenTeaser (State Org)';
GenTeaserStateOrg.args = {
  stateOrg: {
    title: {
      info: 'This is the info',
      text: 'MassHire Department of Career Services',
      href: 'https://www.mass.gov/orgs/masshire-department-of-career-services',
      showFileIcon: false
    },
    description: 'The MassHire Department of Career Services provides job seekers with a variety of job assistance services, ... How to Access State Jobs - Information Session.',
    phone: {
      number: '6176265300',
      details: '8:30 a.m. - 4:30 p.m. weekdays'
    },
    email: {
      email: 'DCSFeedback@MassMail.State.MA.US'
    },
    locations: {
      icon: 'IconMarker',
      href: 'https://www.mass.gov/orgs/masshire-department-of-career-services/locations',
      text: 'MassHire Department of Career Services Locations'
    },
    infodetails: {
      icon: 'IconLaptop',
      text: 'Find a job with MassHire JobQuest',
      href: 'https://jobquest.detma.org/jobquest/Default.aspx'
    }
  }
};
GenTeaserStateOrg.parameters = {
  docs: {
    page: () => <StoryPage StoryComponent={GenTeaserStateOrg} Description={GenTeaserDocs} />
  }
};
export const GenTeaserLocation = ({ location }) => (
  <GenTeaserContainer>
    <GenTeaserDetails>
      <GenTeaserTitle title={location.title} />
      <GenTeaserDescription description={location.description} />
      <GenTeaserMoreInfo>
        <GenTeaserPrimaryInfo>
          <GenTeaserAddress {...location.address} />
        </GenTeaserPrimaryInfo>
      </GenTeaserMoreInfo>
    </GenTeaserDetails>
  </GenTeaserContainer>
);
GenTeaserLocation.storyName = 'GenTeaser as Location';
GenTeaserLocation.args = {
  location: {
    title: {
      info: 'This is the info',
      text: 'Haverhill RMV Service Center',
      href: 'https://www.mass.gov/locations/haverhill-rmv-service-center',
      showFileIcon: false
    },
    description: 'Aug 29, 2019 ... 229c Lincoln Avenue, Haverhill, MA 01830. directions · Start your application online See and compare wait times at RMV Service Centers in ...',
    address: {
      address: '229c Lincoln Avenue<br>Haverhill, MA 01830<br>United States',
      directionLink: 'https://maps.google.com/?q=229c+Lincoln+Avenue%2C+Haverhill%2C+MA+01830',
      details: 'details'
    }
  }
};
GenTeaserLocation.parameters = {
  docs: {
    page: () => <StoryPage StoryComponent={GenTeaserLocation} Description={GenTeaserDocs} />
  }
};

export const GenTeaserEventStory = ({event}) => (
  <GenTeaserContainer>
    <GenTeaserDetails>
      <GenTeaserTitle title={event.title} />
      <GenTeaserEmphasis>
        <GenTeaserOrgs orgs={event.orgs} />
      </GenTeaserEmphasis>
      <GenTeaserDescription description={event.description} />
      <GenTeaserMoreInfo>
        <GenTeaserPrimaryInfo>
          <GenTeaserEvent {...event.event} />
        </GenTeaserPrimaryInfo>
        <GenTeaserSecondaryInfo>
          <GenTeaserAddress {...event.address} />
        </GenTeaserSecondaryInfo>
      </GenTeaserMoreInfo>
    </GenTeaserDetails>
  </GenTeaserContainer>
);
GenTeaserEventStory.storyName = 'GenTeaser as Event';
GenTeaserEventStory.args = {
  event: {
    title: {
      info: 'This is the info',
      text: 'Job Fair 2019',
      href: 'https://www.mass.gov/locations/haverhill-rmv-service-center',
      showFileIcon: false
    },
    orgs: 'MassHire Department of Career Services',
    description: 'Jul 17, 2019 ... offered by. MassHire Department of Career Services. show 0 more. related to. MassHire Plymouth Career Center · MassHire ... Job Fair 2019.',
    address: {
      address: 'Kingston Collection 101 Kingston Collection Way<br>Kingston MA 02364',
      directionLink: 'https://maps.google.com/?q=Kingston+Collection+101+Kingston+Collection+Way+Kingston+MA+02364',
      details: 'details'
    },
    event: {
      startDate: new Date(2019, 7, 12, 13, 0, 0),
      endDate: new Date(2019, 7, 17, 16, 0, 0),
      details: 'First come first serve.',
      location: '324-R Clark Street, Worcester MA 01606',
      description: 'Go to this link https://www.mass.gov/',
      title: 'Title here',
      calendars: [{
        text: 'iCal or Outlook',
        type: 'outlook'
      }, {
        text: 'Yahoo Calendar',
        type: 'yahoo'
      }, {
        text: 'Google Calendar',
        type: 'google'
      }]
    }
  }
};
GenTeaserEventStory.parameters = {
  docs: {
    page: () => <StoryPage StoryComponent={GenTeaserEventStory} Description={GenTeaserDocs} />
  }
};
export const GenTeaserImageStory = ({ teaser }) => (
  <GenTeaserContainer stacked={teaser.stacked} align={teaser.align}>
    <GenTeaserImage img={teaser.img} />
    <GenTeaserDetails>
      <GenTeaserTitle title={teaser.title} />
      <GenTeaserDescription description={teaser.description} />
    </GenTeaserDetails>
  </GenTeaserContainer>
);
GenTeaserImageStory.storyName = 'GenTeaser with Image';
GenTeaserImageStory.args = {
  teaser: {
    stacked: false,
    align: 'top',
    title: {
      info: 'This is the info',
      text: 'Job Fair 2019',
      href: 'https://www.mass.gov/locations/haverhill-rmv-service-center',
      showFileIcon: false
    },
    description: 'Jul 17, 2019 ... offered by. MassHire Department of Career Services. show 0 more. related to. MassHire Plymouth Career Center · MassHire ... Job Fair 2019.',
    img: {
      src: placeholder,
      alt: '',
      shape: 'circular'
    }
  }
};
GenTeaserImageStory.argTypes = {
  align: {
    control: {
      type: 'select',
      options: ['top', 'center']
    }
  }
};
GenTeaserImageStory.parameters = {
  docs: {
    page: () => <StoryPage StoryComponent={GenTeaserImageStory} Description={GenTeaserDocs} />
  }
};
export default {
  title: 'organisms/GenTeaser',
  component: GenTeaser,
  parameters: {
    docs: {
      page: () => <StoryPage Description={GenTeaserDocs} />
    }
  }
};
