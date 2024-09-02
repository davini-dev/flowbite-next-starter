"use client";

import {
  Button,
  Card,
  Checkbox,
  Footer,
  Label,
  ListGroup,
  Modal,
  TextInput,
} from "flowbite-react";
import type { NextPage } from "next";
import type { FC } from "react";
import { useState } from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import {
  HiCloudDownload,
  HiInbox,
  HiOutlineAdjustments,
  HiUserCircle,
} from "react-icons/hi";

import { ConnectButton } from '@rainbow-me/rainbowkit';

export const YourApp = () => {
  return <ConnectButton />;
};

export const HomePageContent: NextPage = function () {
  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 text-5xl font-extrabold dark:text-white">
            Seja bem vindo ao <code>Curtik.Top</code>!
          </h1>
        </header>
      </section>

    </div>
  );
};








