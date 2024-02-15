import React, { useState } from "react";

const Post = () => {
  // State to toggle comment section visibility
  const [showComments, setShowComments] = useState(false);
  // State to toggle emoji panel visibility
  const [showEmojiPanel, setShowEmojiPanel] = useState(false);

  // Function to toggle the comment section visibility
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  // Function to toggle the emoji panel visibility
  const toggleEmojiPanel = () => {
    setShowEmojiPanel(!showEmojiPanel);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-[8px] items-center h-[55px] w-full border-t border-b border-black px-[16px]">
        <img src="/images/avatar.png" alt="" />
        <span className="text-[12px] font-medium"> ishikapareek</span>
      </div>
      <p className="mx-[10px] mt-[5px] text-[14px]">
        real time photo generation.{" "}
        <span className="text-[#FF5705] font-[700]">90s fashion</span>
      </p>
      {/* <img src="" className="mx-[10px]" alt="" /> */}

      <div className="mx-[10px] mt-[12px] w-[370px] h-[358px] bg-[#D9D9D9] rounded-[8px]"></div>
      <span className="mx-[10px] mt-[3px] text-[#969695] italic text-[12px]">
        comment to generate yours.
      </span>
      <div className="flex flex-row justify-between mx-[10px] mt-[10px]">
        <div className="flex flex-row gap-[30px]">
          {showComments ? (
            <svg
              onClick={toggleComments}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
            >
              <path
                d="M5.3475 15.242C5.47725 15.3723 5.57667 15.5295 5.63868 15.7026C5.70069 15.8756 5.72376 16.0603 5.70625 16.2433C5.6184 17.0902 5.45185 17.9272 5.20875 18.7433C6.9525 18.3395 8.0175 17.872 8.50125 17.627C8.77563 17.488 9.09161 17.4551 9.38875 17.5345C10.2405 17.7616 11.1185 17.8759 12 17.8745C16.995 17.8745 20.75 14.3658 20.75 10.3745C20.75 6.38451 16.995 2.87451 12 2.87451C7.005 2.87451 3.25 6.38451 3.25 10.3745C3.25 12.2095 4.02125 13.912 5.3475 15.242ZM4.73125 20.1233C4.43509 20.182 4.13796 20.2357 3.84 20.2845C3.59 20.3245 3.4 20.0645 3.49875 19.832C3.60974 19.5703 3.71147 19.3047 3.80375 19.0358L3.8075 19.0233C4.1175 18.1233 4.37 17.0883 4.4625 16.1245C2.92875 14.587 2 12.5745 2 10.3745C2 5.54201 6.4775 1.62451 12 1.62451C17.5225 1.62451 22 5.54201 22 10.3745C22 15.207 17.5225 19.1245 12 19.1245C11.0096 19.1258 10.0232 18.9973 9.06625 18.742C8.41625 19.0708 7.0175 19.6695 4.73125 20.1233Z"
                fill="#FF5705"
                stroke="#FF5705"
                strokeWidth="3"
              />
            </svg>
          ) : (
            <svg
              onClick={toggleComments}
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M3.88998 15.4827C4.01973 15.613 4.11915 15.7702 4.18116 15.9433C4.24317 16.1164 4.26624 16.301 4.24873 16.484C4.16088 17.331 3.99433 18.1679 3.75123 18.984C5.49498 18.5802 6.55998 18.1127 7.04373 17.8677C7.31811 17.7288 7.63409 17.6958 7.93123 17.7752C8.78302 18.0023 9.66094 18.1166 10.5425 18.1152C15.5375 18.1152 19.2925 14.6065 19.2925 10.6152C19.2925 6.62523 15.5375 3.11523 10.5425 3.11523C5.54748 3.11523 1.79248 6.62523 1.79248 10.6152C1.79248 12.4502 2.56373 14.1527 3.88998 15.4827ZM3.27373 20.364C2.97757 20.4227 2.68044 20.4765 2.38248 20.5252C2.13248 20.5652 1.94248 20.3052 2.04123 20.0727C2.15222 19.811 2.25395 19.5454 2.34623 19.2765L2.34998 19.264C2.65998 18.364 2.91248 17.329 3.00498 16.3652C1.47123 14.8277 0.54248 12.8152 0.54248 10.6152C0.54248 5.78273 5.01998 1.86523 10.5425 1.86523C16.065 1.86523 20.5425 5.78273 20.5425 10.6152C20.5425 15.4477 16.065 19.3652 10.5425 19.3652C9.55204 19.3666 8.56571 19.238 7.60873 18.9827C6.95873 19.3115 5.55998 19.9102 3.27373 20.364Z"
                fill="black"
              />
            </svg>
          )}

          <div className="relative">
            {showEmojiPanel && (
              <div className="absolute -top-[5px] left-[90px] transform -translate-x-1/2 -translate-y-full">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="247"
                    height="56"
                    viewBox="0 0 247 56"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.22559 0.599121C3.80731 0.599121 0.225586 4.18084 0.225586 8.59912V37.1296C0.225586 41.5479 3.80731 45.1296 8.22558 45.1296H36.4032L43.4444 54.9089C44.2425 56.0174 45.8924 56.0174 46.6905 54.9089L53.7317 45.1296H238.46C242.878 45.1296 246.46 41.5479 246.46 37.1296V8.59912C246.46 4.18084 242.878 0.599121 238.46 0.599121H8.22559Z"
                      fill="#F5F4F4"
                    />
                  </svg>
                  <div className="flex flex-row gap-[15px] absolute top-[5px] w-full px-[14px] ">
                    <span className="text-[24px]"> ❤️ </span>
                    <span className="text-[24px]"> 😂 </span>
                    <span className="text-[24px]"> 🔥</span>
                    <span className="text-[24px]"> 😭</span>
                    <span className="text-[24px]"> 🤩 </span>
                    <span className="text-[24px]"> 🤮</span>
                  </div>
                </div>
              </div>
            )}
            <svg
              onClick={toggleEmojiPanel}
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M10.5425 19.3652C8.22184 19.3652 5.99624 18.4434 4.3553 16.8024C2.71435 15.1615 1.79248 12.9359 1.79248 10.6152C1.79248 8.29459 2.71435 6.06899 4.3553 4.42805C5.99624 2.78711 8.22184 1.86523 10.5425 1.86523C12.8631 1.86523 15.0887 2.78711 16.7297 4.42805C18.3706 6.06899 19.2925 8.29459 19.2925 10.6152C19.2925 12.9359 18.3706 15.1615 16.7297 16.8024C15.0887 18.4434 12.8631 19.3652 10.5425 19.3652ZM10.5425 20.6152C13.1946 20.6152 15.7382 19.5617 17.6135 17.6863C19.4889 15.8109 20.5425 13.2674 20.5425 10.6152C20.5425 7.96307 19.4889 5.41953 17.6135 3.54417C15.7382 1.6688 13.1946 0.615234 10.5425 0.615234C7.89032 0.615234 5.34678 1.6688 3.47141 3.54417C1.59605 5.41953 0.54248 7.96307 0.54248 10.6152C0.54248 13.2674 1.59605 15.8109 3.47141 17.6863C5.34678 19.5617 7.89032 20.6152 10.5425 20.6152Z"
                fill="black"
              />
              <path
                d="M5.89891 12.574C6.04246 12.4911 6.21305 12.4686 6.37316 12.5115C6.53327 12.5544 6.66978 12.6592 6.75266 12.8027C7.13655 13.4682 7.68897 14.0207 8.35432 14.4047C9.01966 14.7887 9.77444 14.9907 10.5427 14.9902C11.3109 14.9907 12.0657 14.7887 12.731 14.4047C13.3963 14.0207 13.9488 13.4682 14.3327 12.8027C14.3734 12.7311 14.4279 12.6682 14.493 12.6177C14.5582 12.5672 14.6327 12.5301 14.7122 12.5085C14.7918 12.4869 14.8748 12.4812 14.9565 12.4919C15.0383 12.5025 15.1171 12.5292 15.1885 12.5704C15.2599 12.6116 15.3224 12.6665 15.3725 12.732C15.4225 12.7975 15.4592 12.8722 15.4802 12.9519C15.5013 13.0316 15.5064 13.1146 15.4952 13.1963C15.4841 13.278 15.4568 13.3566 15.4152 13.4277C14.9216 14.2832 14.2113 14.9935 13.356 15.4872C12.5006 15.981 11.5303 16.2407 10.5427 16.2402C9.55503 16.2407 8.5847 15.981 7.72934 15.4872C6.87397 14.9935 6.16376 14.2832 5.67016 13.4277C5.58728 13.2842 5.56482 13.1136 5.60772 12.9535C5.65062 12.7934 5.75536 12.6569 5.89891 12.574ZM9.29266 8.74023C9.29266 9.77523 8.73266 10.6152 8.04266 10.6152C7.35266 10.6152 6.79266 9.77523 6.79266 8.74023C6.79266 7.70523 7.35266 6.86523 8.04266 6.86523C8.73266 6.86523 9.29266 7.70523 9.29266 8.74023ZM14.2927 8.74023C14.2927 9.77523 13.7327 10.6152 13.0427 10.6152C12.3527 10.6152 11.7927 9.77523 11.7927 8.74023C11.7927 7.70523 12.3527 6.86523 13.0427 6.86523C13.7327 6.86523 14.2927 7.70523 14.2927 8.74023Z"
                fill="black"
              />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M4.02734 3.74023C4.02734 2.91143 4.35658 2.11658 4.94264 1.53053C5.52869 0.944474 6.32354 0.615234 7.15234 0.615234C7.98115 0.615234 8.776 0.944474 9.36205 1.53053C9.9481 2.11658 10.2773 2.91143 10.2773 3.74023C10.2773 2.91143 10.6066 2.11658 11.1926 1.53053C11.7787 0.944474 12.5735 0.615234 13.4023 0.615234C14.2311 0.615234 15.026 0.944474 15.6121 1.53053C16.1981 2.11658 16.5273 2.91143 16.5273 3.74023V3.74773C16.5273 3.83523 16.5273 4.08523 16.4798 4.36523H19.0273C19.3589 4.36523 19.6768 4.49693 19.9112 4.73135C20.1456 4.96577 20.2773 5.28371 20.2773 5.61523V8.11523C20.2773 8.44675 20.1456 8.7647 19.9112 8.99912C19.6768 9.23354 19.3589 9.36523 19.0273 9.36523V18.7402C19.0273 19.2375 18.8298 19.7144 18.4782 20.0661C18.1265 20.4177 17.6496 20.6152 17.1523 20.6152H3.40234C2.90506 20.6152 2.42815 20.4177 2.07652 20.0661C1.72489 19.7144 1.52734 19.2375 1.52734 18.7402V9.36523C1.19582 9.36523 0.877881 9.23354 0.64346 8.99912C0.40904 8.7647 0.277344 8.44675 0.277344 8.11523V5.61523C0.277344 5.28371 0.40904 4.96577 0.64346 4.73135C0.877881 4.49693 1.19582 4.36523 1.52734 4.36523H4.07484C4.04183 4.16108 4.02594 3.95453 4.02734 3.74773V3.74023ZM5.36234 4.36523H9.02734V3.74023C9.02734 3.49401 8.97885 3.25019 8.88462 3.0227C8.79039 2.79522 8.65228 2.58852 8.47817 2.41441C8.30406 2.2403 8.09736 2.10219 7.86987 2.00796C7.64239 1.91373 7.39857 1.86523 7.15234 1.86523C6.90612 1.86523 6.6623 1.91373 6.43481 2.00796C6.20733 2.10219 6.00063 2.2403 5.82652 2.41441C5.65241 2.58852 5.5143 2.79522 5.42007 3.0227C5.32584 3.25019 5.27734 3.49401 5.27734 3.74023C5.27734 3.84648 5.27984 4.08273 5.33359 4.27773C5.3411 4.30754 5.35071 4.33678 5.36234 4.36523ZM11.5273 4.36523H15.1923C15.2038 4.33673 15.2134 4.3075 15.2211 4.27773C15.2748 4.08273 15.2773 3.84648 15.2773 3.74023C15.2773 3.24295 15.0798 2.76604 14.7282 2.41441C14.3765 2.06278 13.8996 1.86523 13.4023 1.86523C12.9051 1.86523 12.4281 2.06278 12.0765 2.41441C11.7249 2.76604 11.5273 3.24295 11.5273 3.74023V4.36523ZM1.52734 5.61523V8.11523H9.02734V5.61523H1.52734ZM11.5273 5.61523V8.11523H19.0273V5.61523H11.5273ZM17.7773 9.36523H11.5273V19.3652H17.1523C17.3181 19.3652 17.4771 19.2994 17.5943 19.1822C17.7115 19.065 17.7773 18.906 17.7773 18.7402V9.36523ZM9.02734 19.3652V9.36523H2.77734V18.7402C2.77734 18.906 2.84319 19.065 2.9604 19.1822C3.07761 19.2994 3.23658 19.3652 3.40234 19.3652H9.02734Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="flex flex-row gap-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.277344 4.88428C0.277344 4.71852 0.343192 4.55955 0.460402 4.44234C0.577612 4.32513 0.736583 4.25928 0.902344 4.25928H1.52734C4.27984 4.25928 6.31109 5.80928 7.61984 7.28178C8.23234 7.97178 8.70109 8.65928 9.02734 9.19678C9.35234 8.65928 9.82234 7.97178 10.4348 7.28178C11.7436 5.80928 13.7748 4.25928 16.5273 4.25928V5.50928C14.2798 5.50928 12.5611 6.77178 11.3698 8.11178C10.7257 8.84136 10.1725 9.64641 9.72234 10.5093C10.1721 11.3721 10.7249 12.1771 11.3686 12.9068C12.5623 14.2468 14.2823 15.5093 16.5273 15.5093V16.7593C13.7748 16.7593 11.7436 15.2093 10.4348 13.7368C9.90924 13.1419 9.43817 12.501 9.02734 11.8218C8.70234 12.3593 8.23234 13.0468 7.61984 13.7368C6.31109 15.2093 4.27984 16.7593 1.52734 16.7593H0.902344C0.736583 16.7593 0.577612 16.6934 0.460402 16.5762C0.343192 16.459 0.277344 16.3 0.277344 16.1343C0.277344 15.9685 0.343192 15.8095 0.460402 15.6923C0.577612 15.5751 0.736583 15.5093 0.902344 15.5093H1.52734C3.77484 15.5093 5.49359 14.2468 6.68484 12.9068C7.32897 12.1772 7.88218 11.3721 8.33234 10.5093C7.88257 9.64648 7.32978 8.84143 6.68609 8.11178C5.49234 6.77178 3.77234 5.50928 1.52734 5.50928H0.902344C0.736583 5.50928 0.577612 5.44343 0.460402 5.32622C0.343192 5.20901 0.277344 5.05004 0.277344 4.88428Z"
              fill="black"
            />
            <path
              d="M16.5273 7.34189V2.42689C16.5274 2.36751 16.5443 2.30936 16.5762 2.25926C16.6081 2.20916 16.6535 2.16918 16.7073 2.144C16.7611 2.11881 16.8209 2.10947 16.8798 2.11707C16.9387 2.12466 16.9942 2.14888 17.0398 2.18689L19.9898 4.64439C20.1398 4.76939 20.1398 4.99938 19.9898 5.12438L17.0398 7.58189C16.9942 7.61989 16.9387 7.6441 16.8798 7.6517C16.8209 7.6593 16.7611 7.64996 16.7073 7.62477C16.6535 7.59959 16.6081 7.55961 16.5762 7.50951C16.5443 7.45941 16.5274 7.40126 16.5273 7.34189ZM16.5273 18.5919V13.6769C16.5274 13.6175 16.5443 13.5594 16.5762 13.5093C16.6081 13.4592 16.6535 13.4192 16.7073 13.394C16.7611 13.3688 16.8209 13.3595 16.8798 13.3671C16.9387 13.3747 16.9942 13.3989 17.0398 13.4369L19.9898 15.8944C20.1398 16.0194 20.1398 16.2494 19.9898 16.3744L17.0398 18.8319C16.9942 18.8699 16.9387 18.8941 16.8798 18.9017C16.8209 18.9093 16.7611 18.9 16.7073 18.8748C16.6535 18.8496 16.6081 18.8096 16.5762 18.7595C16.5443 18.7094 16.5274 18.6513 16.5273 18.5919Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M0.542969 1.75928C0.542969 1.42776 0.674665 1.10981 0.909085 0.875394C1.14351 0.640973 1.46145 0.509277 1.79297 0.509277L8.04297 0.509277C8.37449 0.509277 8.69243 0.640973 8.92685 0.875394C9.16127 1.10981 9.29297 1.42776 9.29297 1.75928V19.2593C9.29297 19.5908 9.16127 19.9087 8.92685 20.1432C8.69243 20.3776 8.37449 20.5093 8.04297 20.5093H1.79297C1.46145 20.5093 1.14351 20.3776 0.909085 20.1432C0.674665 19.9087 0.542969 19.5908 0.542969 19.2593V1.75928ZM11.793 1.75928C11.793 1.42776 11.9247 1.10981 12.1591 0.875394C12.3935 0.640973 12.7114 0.509277 13.043 0.509277L19.293 0.509277C19.6245 0.509277 19.9424 0.640973 20.1769 0.875394C20.4113 1.10981 20.543 1.42776 20.543 1.75928V8.00928C20.543 8.3408 20.4113 8.65874 20.1769 8.89316C19.9424 9.12758 19.6245 9.25928 19.293 9.25928H13.043C12.7114 9.25928 12.3935 9.12758 12.1591 8.89316C11.9247 8.65874 11.793 8.3408 11.793 8.00928V1.75928ZM11.793 13.0093C11.793 12.6778 11.9247 12.3598 12.1591 12.1254C12.3935 11.891 12.7114 11.7593 13.043 11.7593H19.293C19.6245 11.7593 19.9424 11.891 20.1769 12.1254C20.4113 12.3598 20.543 12.6778 20.543 13.0093V19.2593C20.543 19.5908 20.4113 19.9087 20.1769 20.1432C19.9424 20.3776 19.6245 20.5093 19.293 20.5093H13.043C12.7114 20.5093 12.3935 20.3776 12.1591 20.1432C11.9247 19.9087 11.793 19.5908 11.793 19.2593V13.0093Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      {showComments && (
        <div className="flex-col mx-[10px] mt-[16px]">
          <div className="flex-none mb-[16px]">
            <div className="flex flex-row items-center pr-[12px] rounded-[2px] border-[0.5px] border-[#909090] bg-transparent w-full h-[40px]">
              <input
                className="bg-transparent w-full p-[18px] focus:outline-none text-[12px]"
                type="text"
                placeholder="COMMENT"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M0.417969 3.84033C0.417969 3.04468 0.734039 2.28162 1.29665 1.71901C1.85926 1.1564 2.62232 0.840332 3.41797 0.840332L21.418 0.840332C22.2136 0.840332 22.9767 1.1564 23.5393 1.71901C24.1019 2.28162 24.418 3.04468 24.418 3.84033V21.8403C24.418 22.636 24.1019 23.399 23.5393 23.9617C22.9767 24.5243 22.2136 24.8403 21.418 24.8403H3.41797C2.62232 24.8403 1.85926 24.5243 1.29665 23.9617C0.734039 23.399 0.417969 22.636 0.417969 21.8403V3.84033ZM8.66797 18.8403C8.66793 18.9849 8.70968 19.1264 8.78818 19.2478C8.86669 19.3692 8.97861 19.4653 9.11047 19.5246C9.24233 19.5839 9.38851 19.6038 9.53142 19.5819C9.67433 19.56 9.80787 19.4973 9.91597 19.4013L16.666 13.4013C16.7453 13.331 16.8088 13.2446 16.8522 13.1479C16.8957 13.0512 16.9182 12.9464 16.9182 12.8403C16.9182 12.7343 16.8957 12.6295 16.8522 12.5328C16.8088 12.4361 16.7453 12.3497 16.666 12.2793L9.91597 6.27933C9.80787 6.18334 9.67433 6.12063 9.53142 6.09876C9.38851 6.07689 9.24233 6.09679 9.11047 6.15607C8.97861 6.21534 8.86669 6.31146 8.78818 6.43286C8.70968 6.55426 8.66793 6.69576 8.66797 6.84033V18.8403Z"
                  fill="#909090"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-[20px] ">
            <div className="flex flex-row gap-[10px]">
              <img
                className="w-[24px] h-[24px]"
                src="/images/avatar.png"
                alt=""
              />
              <div className="flex flex-col">
                <p className="font-[500] text-[10px]">ishikapareek</p>
                <p className="text-[12px]">just keep pushing yourself</p>
              </div>
            </div>
            <div className="flex flex-row gap-[10px]">
              <img
                className="w-[24px] h-[24px]"
                src="/images/avatar.png"
                alt=""
              />
              <div className="flex flex-col">
                <p className="font-[500] text-[10px]">ishikapareek</p>
                <p className="text-[12px]">just keep pushing yourself</p>
              </div>
            </div>
            <div className="flex flex-row gap-[10px]">
              <img
                className="w-[24px] h-[24px]"
                src="/images/avatar.png"
                alt=""
              />
              <div className="flex flex-col">
                <p className="font-[500] text-[10px]">ishikapareek</p>
                <p className="text-[12px]">just keep pushing yourself</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="247"
  height="56"
  viewBox="0 0 247 56"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8.22559 0.599121C3.80731 0.599121 0.225586 4.18084 0.225586 8.59912V37.1296C0.225586 41.5479 3.80731 45.1296 8.22558 45.1296H36.4032L43.4444 54.9089C44.2425 56.0174 45.8924 56.0174 46.6905 54.9089L53.7317 45.1296H238.46C242.878 45.1296 246.46 41.5479 246.46 37.1296V8.59912C246.46 4.18084 242.878 0.599121 238.46 0.599121H8.22559Z"
    fill="#F5F4F4"
  />
</svg>;