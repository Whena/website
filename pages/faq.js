import React from 'react';
import Layout from '../Components/Layout';
import SearchBar from '../Components/SearchBarFAQ/SearchBarFAQ.component';
import FaqContent from '../Components/FaqContent/FaqContent.component';
import ContactUs from '../Components/ContactUsFaq/ContactsUsFaq.component';
import BeOurPartner from '../Components/BeOurPartner/BeOurPartner.component';

// import BottomBanner from '../../Components/BottomBanner/BottomBanner.component';

export default function Index() {

  return (
    <Layout>
      <SearchBar />
      <FaqContent />
      <ContactUs  />
      <BeOurPartner />
    </Layout>
  );
}
