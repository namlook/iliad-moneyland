

import OutletWidget from 'odyssee-client/lib/components/widgets/OutletWidget';
import ApplicationMenuWidget from 'odyssee-client/lib/components/widgets/ApplicationMenuWidget';
import MobileApplicationMenuWidget
  from 'odyssee-client/lib/components/widgets/MobileApplicationMenuWidget';
import ApplicationNavbarWidget from 'odyssee-client/lib/components/widgets/ApplicationNavbarWidget';
import MenuWidget from 'odyssee-client/lib/components/widgets/MenuWidget';
import HeaderWidget from 'odyssee-client/lib/components/widgets/HeaderWidget';

import NotFoundWidget from 'odyssee-client/lib/components/contrib/NotFoundWidget';


export default {
  stores: {

  },
  widgets: {
    OutletWidget: { Component: OutletWidget },
    MobileApplicationMenuWidget: { Component: MobileApplicationMenuWidget },
    ApplicationMenuWidget: { Component: ApplicationMenuWidget },
    ApplicationNavbarWidget: { Component: ApplicationNavbarWidget },
    MenuWidget: { Component: MenuWidget },

    NotFoundWidget: { Component: NotFoundWidget },
  },
};
