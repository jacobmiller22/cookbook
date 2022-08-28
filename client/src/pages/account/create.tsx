import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CreateAccountView, InternalProfileView, UserProfile } from "lib/views";
import { getMemberByUsername } from "lib/member";
import { useAuth } from "lib/hooks";
import { Base } from "lib/layouts";
import { TopbarGroup } from "lib/components/Atomics";

import { useSnackbar } from "notistack";

const ProfilePage: NextPage = () => {
  const { user } = useAuth();

  return (
    <Base divider>
      <CreateAccountView />
    </Base>
  );
};

export default ProfilePage;
