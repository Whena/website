import React from 'react';
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBarFAQ/SearchBarFAQ.component';
import FaqContent from '../../components/FaqContent/FaqContent.component';
import ContactUs from '../../components/ContactUsFaq/ContactsUsFaq.component';

export default function Index() {
  return (
    <Layout>
      <SearchBar />
      <FaqContent />
      <ContactUs />
    </Layout>
  );
}
