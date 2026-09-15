import React from "react";
import Section1 from "./components/Section1/Section1";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfDF8MHx8fDA%3D",
      intro:
        "Customers who are happy with existing services and show strong satisfaction with their current providers.",
      tag: "Satisfied",
      color: "crimson",
    },
    {
      img: "https://images.unsplash.com/photo-1624797432677-6f803a98acb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfDF8MHx8fDA%3D",
      intro:
        "Customers whose needs are not fully addressed by available products, services, or market offerings.",
      tag: "Underserved",
      color: "darkcyan",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661661360962-9a5323af6a35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8",
      intro:
        "Customers with limited access to traditional banking services, credit facilities, and financial products.",
      tag: "Underbanked",
      color: "darkmagenta",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661589932346-20fb0a8c13e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
      intro:
        "Customers showing strong interest but facing barriers that prevent them from becoming regular buyers.",
      tag: "High Potential",
      color: "deeppink",
    },

    {
      img: "https://plus.unsplash.com/premium_photo-1663134310533-fc3b59225810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      intro:
        "Frequently logs in to check security settings or card freezes, but hesitates to move significant funds due to online trust boundaries.",
      tag: "Security-skeptic ",
      color: "indigo",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1670071482028-7cecdcf42add?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Maintains a healthy checking balance but leaves it idle. They show interest in micro-investing or automated robo-advisors but fail to launch a portfolio.",
      tag: "Wealth-aspirant",
      color: "orangered",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1663134310533-fc3b59225810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMG1lbnxlbnwwfDF8MHx8fDA%3D",
      intro:
        "Only deposits money when promotional high-yield savings rates (APY) are active, moving funds out immediately when rates drop.",
      tag: "Rate-chaser",
      color: "darkblue",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjB3b21lbnxlbnwwfDF8MHx8fDA%3D",
      intro:
        "Utilizes the platform for direct deposit, automated bill pay, investment portfolios, and daily debit or credit transactions.",
      tag: "Power-user",
      color: "darkorchid",
    },
    {
      img: "https://images.unsplash.com/photo-1762341104634-998bbee0ccba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMHdvbWVufGVufDB8MXwwfHx8MA%3D%3D",
      intro:
        "Began an application for a credit card, loan, or investment account but abandoned the process midway through documentation.",
      tag: "Dormant-applicant",
      color: "maroon",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
    </div>
  );
};

export default App;
