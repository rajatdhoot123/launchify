import React from 'react'
import Image from 'next/image'
import Person from '../../assets/images/international/person.png'
import Card1 from '../../assets/images/international/card-1.svg'
import Card2 from '../../assets/images/international/card-2.svg'
import Title, { SubTitle } from '../ui/Title/Title'
import Button from '../ui/Button/Button'


const InternationalSection = () => {
    return (
      <div className="bg-[#1053f37f]/10 py-12 ">
        <div className="w-responsive grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[150px]">
          {/* main image */}
          <div className="relative">
            <Image
              src={Person}
              alt="person"
              width={450}
              height={530}
              className="rounded-xl"
            />
            <Image
              src={Card1}
              alt="card"
              width={200}
              height={200}
              className="absolute p-2 bg-white top-10 left-0 lg:-left-12 rounded-xl max-md:w-[150px] max-lg:opacity-0"
            />
            <div className="absolute bg-white bottom-0 max-md:opacity-0 lg:-bottom-5 right-0 lg:-right-12 rounded-xl py-5 px-3 space-y-2">
              <h3 className="font-bold">Active users</h3>
              <Image
                src={Card2}
                alt="card"
                width={200}
                height={200}
                className="w-full"
              />
            </div>
          </div>

          {/* main content */}
          <div className="self-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-wide font-bold">
                Best ways to send <br />
                money internationally
              </h2>
              <SubTitle subTitleClass={"text-start"}>
                Join over 12 million users doing transactions with safe &
                secure, we are here to make payments simple & quick
              </SubTitle>
            </div>

            <div className="flex-center-between">
              <div className="space-y-4">
                <svg
                  width="38"
                  height="28"
                  viewBox="0 0 38 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.1703 1.0059L19.0001 0.708008L5.82997 1.0059C3.38951 1.06111 1.32316 2.82224 0.8819 5.22311C-0.184592 11.0258 -0.184592 16.9743 0.8819 22.7769C1.32316 25.1778 3.38951 26.9389 5.82997 26.9941L19.0001 27.292L32.1703 26.9941C34.6107 26.9389 36.6771 25.1778 37.1184 22.7769C38.1848 16.9743 38.1848 11.0258 37.1184 5.22311C36.6771 2.82224 34.6107 1.0611 32.1703 1.0059ZM5.89216 3.7552L19.0001 3.45871L32.1081 3.7552C33.2452 3.78092 34.2081 4.60153 34.4137 5.72021C34.6947 7.24919 34.8972 8.7889 35.0212 10.3333H2.97903C3.10306 8.7889 3.30558 7.24919 3.5866 5.72021C3.7922 4.60152 4.75502 3.78092 5.89216 3.7552ZM2.83203 14C2.83203 16.7714 3.08355 19.5428 3.5866 22.2798C3.7922 23.3985 4.75502 24.2191 5.89216 24.2449L19.0001 24.5413L32.1081 24.2449C33.2452 24.2191 34.2081 23.3985 34.4137 22.2798C34.9167 19.5428 35.1682 16.7714 35.1682 14H2.83203Z"
                    fill="#0A071B"
                  />
                </svg>
                <p className="font-semibold ">Simplified car issuing</p>
              </div>
              <div className="space-y-4">
                <svg
                  width="28"
                  height="36"
                  viewBox="0 0 28 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.9599 0.234889C18.4671 0.450818 18.7963 0.948771 18.7963 1.5V14.33H26.0013C26.4903 14.33 26.9424 14.5897 27.1889 15.012C27.4353 15.4343 27.439 15.9557 27.1984 16.3814L26.2963 17.978C22.8751 24.0329 18.5119 29.5046 13.3707 34.188L11.9123 35.5165C11.5097 35.8832 10.9287 35.9778 10.4307 35.7577C9.93261 35.5377 9.6113 35.0445 9.6113 34.5V21.7788H2.16797C1.40858 21.7788 0.792969 21.1632 0.792969 20.4038C0.792969 20.1578 0.857549 19.9269 0.970677 19.7272C4.19512 13.7662 8.32339 8.34048 13.2087 3.64307L16.4683 0.508858C16.8656 0.126794 17.4527 0.0189588 17.9599 0.234889ZM4.52303 19.0288H10.9863C11.7457 19.0288 12.3613 19.6444 12.3613 20.4038V31.3733C16.7954 27.1831 20.596 22.3682 23.6425 17.08H17.4213C16.6619 17.08 16.0463 16.4644 16.0463 15.705V4.72963L15.1147 5.62536C10.9883 9.59308 7.42563 14.1031 4.52303 19.0288Z"
                    fill="#0A071B"
                  />
                </svg>

                <p className="font-semibold">Faster Transaction</p>
              </div>
            </div>

            <div className="flex-center-start gap-5">
              <Button variant="dark">Try it Free</Button>
              <Button variant="light">Request Demo</Button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default InternationalSection
