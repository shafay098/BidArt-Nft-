import React from "react";
import Layout from "../../layout/Layout";
import SignUpHeader from "../../components/signupcomp/signupheader/SignUpHeader";
import SignUpForm from "../../components/signupcomp/signupform/SignUpForm";
const SingUpPage = () => {
  return (
    <Layout>
      <SignUpHeader />
      <SignUpForm />
    </Layout>
  );
};

export default SingUpPage;
