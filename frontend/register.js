

import OutletWidget from 'odyssee-client/lib/components/widgets/OutletWidget';
import ApplicationMenuWidget from 'odyssee-client/lib/components/widgets/ApplicationMenuWidget';
import MobileApplicationMenuWidget
  from 'odyssee-client/lib/components/widgets/MobileApplicationMenuWidget';
import ApplicationNavbarWidget from 'odyssee-client/lib/components/widgets/ApplicationNavbarWidget';
import MenuWidget from 'odyssee-client/lib/components/widgets/MenuWidget';
import HeaderWidget from 'odyssee-client/lib/components/widgets/HeaderWidget';

import NotFoundWidget from 'odyssee-client/lib/components/contrib/NotFoundWidget';

import * as CollectionListWidget from 'odyssee-client/lib/components/contrib/CollectionListWidget';


import * as CollectionStore from 'odyssee-client/lib/stores/collection-store';
import * as CollectionQueryWidget from
  'odyssee-client/lib/components/contrib/collection-query-widget';
import * as FlashMessagesWidget from 'odyssee-client/lib/components/contrib/flash-messages-widget';


export default {
  stores: {
    CollectionStore,
  },
  widgets: {
    OutletWidget: { Component: OutletWidget },
    MobileApplicationMenuWidget: { Component: MobileApplicationMenuWidget },
    ApplicationMenuWidget: { Component: ApplicationMenuWidget },
    ApplicationNavbarWidget: { Component: ApplicationNavbarWidget },
    HeaderWidget: { Component: HeaderWidget },
    MenuWidget: { Component: MenuWidget },

    NotFoundWidget: { Component: NotFoundWidget },

    CollectionListWidget,
    CollectionQueryWidget,
    FlashMessagesWidget,
  },
};
