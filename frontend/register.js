

import OutletWidget from 'odyssee-client/lib/components/widgets/OutletWidget';
import ApplicationMenuWidget from 'odyssee-client/lib/components/widgets/ApplicationMenuWidget';
import MobileApplicationMenuWidget
  from 'odyssee-client/lib/components/widgets/MobileApplicationMenuWidget';
import ApplicationNavbarWidget from 'odyssee-client/lib/components/widgets/ApplicationNavbarWidget';
import MenuWidget from 'odyssee-client/lib/components/widgets/MenuWidget';
import HeaderWidget from 'odyssee-client/lib/components/widgets/HeaderWidget';

import NotFoundWidget from 'odyssee-client/lib/components/contrib/NotFoundWidget';

import GridWidget from 'odyssee-client/lib/components/widgets/GridWidget';

import * as CollectionListWidget
  from 'odyssee-client/lib/components/contrib/collection-list-widget';

import * as RecordFormWidget from 'odyssee-client/lib/components/contrib/RecordFormWidget';
import * as CollectionQueryWidget
  from 'odyssee-client/lib/components/contrib/collection-query-widget';
import * as FlashMessagesWidget from 'odyssee-client/lib/components/contrib/flash-messages-widget';

import * as CollectionStore from 'odyssee-client/lib/stores/collection-store';
import * as RecordStore from 'odyssee-client/lib/stores/record-store';


export default {
  stores: {
    CollectionStore,
    RecordStore,
  },
  widgets: {
    GridWidget: { Component: GridWidget },
    OutletWidget: { Component: OutletWidget },
    MobileApplicationMenuWidget: { Component: MobileApplicationMenuWidget },
    ApplicationMenuWidget: { Component: ApplicationMenuWidget },
    ApplicationNavbarWidget: { Component: ApplicationNavbarWidget },
    HeaderWidget: { Component: HeaderWidget },
    MenuWidget: { Component: MenuWidget },

    NotFoundWidget: { Component: NotFoundWidget },

    CollectionListWidget,
    RecordFormWidget,
    CollectionQueryWidget,
    FlashMessagesWidget,
  },
};
