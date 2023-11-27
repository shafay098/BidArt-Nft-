import React from "react";
import Layout from "../../layout/Layout";
import LoginHeader from "../../components/logincomp/loginheader/LoginHeader";
import LogInForm from "../../components/logincomp/loginform/LoginForm";

const LogInPage = () => {
  return (
    <Layout>
      <LoginHeader />
      <LogInForm />
    </Layout>
  );
};

export default LogInPage;
