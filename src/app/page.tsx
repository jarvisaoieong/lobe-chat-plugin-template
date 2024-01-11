'use client';

import { lobeChat } from '@lobehub/chat-plugin-sdk/client';
import { useEffect, useState } from 'react';

import Data from '@/components/Render';
import { ResponseData } from '@/type';

const Render = () => {
  const [data, setData] = useState<ResponseData>();

  useEffect(() => {
    lobeChat.getPluginMessage().then((e: ResponseData) => {
      setData(e);
    });
  }, []);

  return <Data {...data}></Data>;
};

export default Render;
