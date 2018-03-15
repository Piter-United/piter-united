export const eventInfo = `
id
slug
name
date
dateEnd
address
photos
logo {
  url
}
video
template
timepadId
registration
program {
  time
  title
}
platinumPartners {
  id
  name
  description
  site
  logo {
    url
  }
}
goldPartners {
  id
  name
  site
  logo {
    url
  }
}
silverPartners {
  id
  name
  site
  logo {
    url
  }
}
bronzePartners {
  id
  name
  site
  logo {
    url
  }
}
infoPartners {
  id
  name
  site
  logo {
    url
  }
}`

const query = `
query {
  allEvents(orderBy: date_DESC) {
    ${eventInfo}
  }
  allSpeakers {
    id
    name
    social
    company {
      id
      name
    }
    talks {
      id
      subject
      description
      event {
        id
        name
      }
      speakers {
        id
        name
      }
      community {
        id
        name
      }
    }
    community {
      id
      name
      site
    }
  }
  allCommunities {
    id
    name
    description
    site
    logo {
      url
    }
  }
  allCompanies {
    id
    name
    site
    description
    speakers {
      id
      name
      photo { url }
    }
    logo { url }
    asGold {
      id
      name
      date
      dateEnd
    }
    asSilver {
      id
      name
      date
      dateEnd
    }
    asBronze {
      id
      name
      date
      dateEnd
    }
    asInfo {
      id
      name
      date
      dateEnd
    }
  }
}`

export default query
