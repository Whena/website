import React from 'react';
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBarFAQ/SearchBarFAQ.component';
import FaqContent from '../../components/FaqContent/FaqContent.component';
import ContactUs from '../../components/ContactUsFaq/ContactsUsFaq.component';
import BeOurPartner from '../../components/BeOurPartner/BeOurPartner.component';

import BottomBanner from '../../Components/BottomBanner/BottomBanner.component';

import {Grid} from '@material-ui/core';

export default function Index() {

  return (
    <Layout>
      <SearchBar />
      <FaqContent />
      <ContactUs  />
      <BeOurPartner />
      <BottomBanner>
        <Grid item>
          <div>heheheh2</div>
        </Grid>
        <Grid item>
          <div>12312</div>
        </Grid>
      </ BottomBanner>
    </Layout>
  );
}
