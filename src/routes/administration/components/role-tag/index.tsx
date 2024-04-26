import React, { FC } from "react";

import { CrownOutlined, StarOutlined, UserOutlined } from "@ant-design/icons";
import { Tag, type TagProps } from "antd";

import { User } from "@/graphql/schema.types";

type Props = {
  role: User["role"];
};

export const RoleTag: FC<Props> = ({ role }) => {
  const variants: {
    [key in User["role"]]: {
      color: TagProps["color"];
      icon: React.ReactNode;
    };
  } = {
    ADMIN: {
      color: "red",
      // @ts-ignore
      icon: <CrownOutlined />,
    },
    SALES_INTERN: {
      color: "blue",
      // @ts-ignore
      icon: <UserOutlined />,
    },
    SALES_PERSON: {
      color: "geekblue",
      // @ts-ignore
      icon: <UserOutlined />,
    },
    SALES_MANAGER: {
      color: "cyan",
      // @ts-ignore
      icon: <StarOutlined />,
    },
  };

  const text = role.replace("_", " ").toLowerCase();

  return (
    <Tag
      style={{
        textTransform: "capitalize",
      }}
      color={variants[role].color}
      icon={variants[role].icon}
    >
      {text}
    </Tag>
  );
};
