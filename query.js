const eventInfo = `
id
name
date
dateEnd
address
photos
video
template
timepadId
registration
program {
  time
  title
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
  allEvents {
    ${eventInfo}
  }
  Event(id: "cje04rb735oce0132m5qyv78a") {
    ${eventInfo}
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
