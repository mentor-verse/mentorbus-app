interface ColorProps {
  color: string;
}
export function Home({color}: ColorProps) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <svg
      width="60"
      height="52"
      viewBox="0 0 60 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      // eslint-disable-next-line react/react-in-jsx-scope
      <path
        d="M36.3556 34H23.6445C20.8364 34 18.5601 31.7255 18.5601 28.92V20.9286C18.5601 19.1522 19.4887 17.5048 21.0092 16.5841L27.3648 12.7356C28.9846 11.7548 31.0155 11.7548 32.6353 12.7356L38.9909 16.5841C40.5114 17.5048 41.4401 19.1522 41.4401 20.9286V28.92C41.4401 31.7255 39.1636 34 36.3556 34Z"
        stroke={color}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.48 29.6001H33.52"
        stroke={color}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.9736 50.6738H26.9971V48.1934H32.9736V50.6738ZM27.7588 50.0781H32.2217V48.7891H27.7588V50.0781ZM33.4814 43.4375H26.4404V42.8418H29.6045V41.9824H30.3662V42.8418H33.4814V43.4375ZM29.9854 43.7891C30.8936 43.7956 31.5885 43.903 32.0703 44.1113C32.5553 44.3164 32.7979 44.6191 32.7979 45.0195C32.7979 45.3971 32.5895 45.6885 32.1729 45.8936C31.7562 46.0986 31.154 46.2158 30.3662 46.2451V46.9141H33.9404V47.5293H26.0303V46.9141H29.6045V46.2451C28.8135 46.2158 28.208 46.0986 27.7881 45.8936C27.3714 45.6885 27.1631 45.3971 27.1631 45.0195C27.1631 44.6191 27.4056 44.3164 27.8906 44.1113C28.3789 43.903 29.0771 43.7956 29.9854 43.7891ZM29.9854 44.3262C29.3376 44.3327 28.8411 44.3945 28.4961 44.5117C28.151 44.6289 27.9801 44.7982 27.9834 45.0195C27.9769 45.2409 28.1494 45.4118 28.501 45.5322C28.8525 45.6527 29.3473 45.7129 29.9854 45.7129C30.6201 45.7129 31.1117 45.6527 31.46 45.5322C31.8115 45.4118 31.9873 45.2409 31.9873 45.0195C31.9873 44.7982 31.8132 44.6289 31.4648 44.5117C31.1198 44.3945 30.6266 44.3327 29.9854 44.3262Z"
        fill={color}
      />
    </svg>
  );
}

export function FindMentor({color}: ColorProps) {
  return (
    <svg
      width="60"
      height="53"
      viewBox="0 0 60 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.5 22.3636C17.5 16.0877 22.5877 11 28.8636 11C35.1396 11 40.2273 16.0877 40.2273 22.3636C40.2273 25.0924 39.2655 27.5964 37.6624 29.5554L42.5 34.3929L40.8929 36L36.0554 31.1624C34.0964 32.7655 31.5924 33.7273 28.8636 33.7273C22.5877 33.7273 17.5 28.6396 17.5 22.3636ZM28.8636 13.2727C23.8429 13.2727 19.7727 17.3429 19.7727 22.3636C19.7727 27.3844 23.8429 31.4545 28.8636 31.4545C33.8844 31.4545 37.9545 27.3844 37.9545 22.3636C37.9545 17.3429 33.8844 13.2727 28.8636 13.2727Z"
        fill={color}
      />
      <path
        d="M21.0395 49.6133H20.307V43.1094H21.0395V49.6133ZM19.3793 49.3594H18.6469V46.2051H17.4262V47.9141H14.0668V43.9492H17.4262V45.5605H18.6469V43.2852H19.3793V49.3594ZM21.3031 51.6055H15.3461V48.8027H16.1078V50.9609H21.3031V51.6055ZM14.7895 47.3086H16.7133V44.5645H14.7895V47.3086ZM28.9402 48.2559H26.2449V50.0723H29.8582V50.707H21.909V50.0723H25.4832V48.2559H22.9344V43.8223H28.8426V44.457H23.7156V45.6973H28.657V46.3223H23.7156V47.6309H28.9402V48.2559ZM33.1105 44.9258C33.1105 45.2676 33.2001 45.5964 33.3791 45.9121C33.5614 46.2279 33.8153 46.5062 34.1408 46.7471C34.4696 46.988 34.8456 47.1719 35.2688 47.2988L34.9074 47.8848C34.4094 47.735 33.9716 47.5072 33.5939 47.2012C33.2196 46.8919 32.9364 46.529 32.7443 46.1123C32.5588 46.568 32.2723 46.9652 31.885 47.3037C31.5008 47.639 31.05 47.8913 30.5324 48.0605L30.1516 47.4551C30.5813 47.3249 30.9621 47.1344 31.2941 46.8838C31.6294 46.6299 31.8898 46.3337 32.0754 45.9951C32.2642 45.6566 32.3586 45.3001 32.3586 44.9258V44.7598H30.3957V44.125H32.3586V43.0703H33.1301V44.125H35.0734V44.7598H33.1105V44.9258ZM36.9387 45.2578H38.2473V45.9023H36.9387V48.1582H36.177V43.1094H36.9387V45.2578ZM37.0949 49.252H34.634C34.6763 49.5449 34.8293 49.8249 35.093 50.0918C35.3599 50.3555 35.6984 50.5817 36.1086 50.7705C36.522 50.9593 36.9615 51.0911 37.427 51.166L37.1438 51.7617C36.4927 51.6543 35.9035 51.4492 35.3762 51.1465C34.8488 50.8438 34.4631 50.4792 34.2189 50.0527C33.9781 50.4759 33.5972 50.8356 33.0764 51.1318C32.5555 51.4313 31.9712 51.638 31.3234 51.752L31.0305 51.166C31.4992 51.0911 31.9387 50.9609 32.3488 50.7754C32.7622 50.5866 33.1008 50.3604 33.3645 50.0967C33.6281 49.833 33.7811 49.5514 33.8234 49.252H31.3723V48.627H37.0949V49.252ZM45.5719 51.791H44.8004V43.1094H45.5719V51.791ZM43.0035 44.0566C42.997 45.3685 42.665 46.5469 42.0074 47.5918C41.3499 48.6335 40.3212 49.4896 38.9215 50.1602L38.5016 49.5352C39.6604 48.985 40.5475 48.3014 41.1627 47.4844C41.7812 46.6673 42.1344 45.7331 42.2223 44.6816H38.902V44.0566H43.0035Z"
        fill={color}
      />
    </svg>
  );
}

export function FindMentee({color}: ColorProps) {
  return (
    <svg
      width="60"
      height="53"
      viewBox="0 0 60 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.5 22.3636C17.5 16.0877 22.5877 11 28.8636 11C35.1396 11 40.2273 16.0877 40.2273 22.3636C40.2273 25.0924 39.2655 27.5964 37.6624 29.5554L42.5 34.3929L40.8929 36L36.0554 31.1624C34.0964 32.7655 31.5924 33.7273 28.8636 33.7273C22.5877 33.7273 17.5 28.6396 17.5 22.3636ZM28.8636 13.2727C23.8429 13.2727 19.7727 17.3429 19.7727 22.3636C19.7727 27.3844 23.8429 31.4545 28.8636 31.4545C33.8844 31.4545 37.9545 27.3844 37.9545 22.3636C37.9545 17.3429 33.8844 13.2727 28.8636 13.2727Z"
        fill={color}
      />
      <path
        d="M21.098 43.0801V49.623H20.2191V43.0801H21.098ZM19.3891 43.2363V49.3594H18.5102V46.2637H17.4262V47.9629H14.0082V43.9199H17.4262V45.502H18.5102V43.2363H19.3891ZM21.352 50.8926V51.6445H15.2973V48.8125H16.2152V50.8926H21.352ZM14.8773 44.6523V47.2402H16.5668V44.6523H14.8773ZM26.743 43.8516V44.6133H23.3348V46.3027H26.4109V47.0449H23.3348V49.0078C24.868 49.0029 25.9715 48.9395 27.2703 48.7344L27.368 49.4863C25.9813 49.7109 24.7801 49.7598 23.1297 49.7598H22.4168V43.8516H26.743ZM29.1551 43.0801V51.8301H28.2176V43.0801H29.1551ZM33.1887 44.8867C33.1887 45.8828 33.9797 46.8203 35.3176 47.1914L34.8977 47.9043C33.8771 47.6211 33.1301 47.0059 32.7395 46.2148C32.3537 47.0791 31.5871 47.7529 30.552 48.0703L30.1027 47.3379C31.4406 46.957 32.2707 45.9805 32.2707 44.8867V44.7891H30.3664V44.0469H32.2707V43.041H33.1984V44.0469H35.093V44.7891H33.1887V44.8867ZM36.9973 43.0801V45.1797H38.2668V45.9512H36.9973V48.1289H36.0695V43.0801H36.9973ZM37.134 48.5684V49.3105H34.7414C34.9074 50.126 36.0305 50.873 37.4953 51.0879L37.1535 51.8008C35.8254 51.5957 34.7316 50.9854 34.2238 50.1504C33.7209 50.9805 32.6369 51.5811 31.3137 51.791L30.9719 51.0781C32.4416 50.873 33.55 50.1504 33.7258 49.3105H31.3234V48.5684H37.134ZM45.6402 43.0801V51.8301H44.7027V43.0801H45.6402ZM43.0328 44.0176C43.0328 46.5762 41.9391 48.8027 38.941 50.2383L38.4527 49.4863C40.7818 48.3779 41.9146 46.8008 42.0953 44.7598H38.8727V44.0176H43.0328Z"
        fill={color}
      />
    </svg>
  );
}

export function MentorBus({color}: ColorProps) {
  return (
    <svg
      width="60"
      height="55"
      viewBox="0 0 60 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M38.0001 34.3571C39.8937 34.3571 41.4287 32.8221 41.4287 30.9286C41.4287 29.035 39.8937 27.5 38.0001 27.5C36.1066 27.5 34.5715 29.035 34.5715 30.9286C34.5715 32.8221 36.1066 34.3571 38.0001 34.3571Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.9999 34.3571C23.8934 34.3571 25.4284 32.8221 25.4284 30.9286C25.4284 29.035 23.8934 27.5 21.9999 27.5C20.1063 27.5 18.5713 29.035 18.5713 30.9286C18.5713 32.8221 20.1063 34.3571 21.9999 34.3571Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M34.5716 30.9282H25.4287"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M41.4286 30.9283H44.8571C45.1602 30.9283 45.4509 30.8079 45.6653 30.5936C45.8796 30.3792 46 30.0885 46 29.7854V20.6426L39.4857 13.0526C39.3784 12.9242 39.2443 12.8209 39.0927 12.7501C38.9411 12.6793 38.7759 12.6426 38.6086 12.6426H15.1429C14.8398 12.6426 14.5491 12.763 14.3347 12.9773C14.1204 13.1916 14 13.4823 14 13.7854V29.7854C14 30.0885 14.1204 30.3792 14.3347 30.5936C14.5491 30.8079 14.8398 30.9283 15.1429 30.9283H18.5714"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 20.6426H46"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.098 51.123H20.2143V44.5752H21.098V51.123ZM18.7689 47.7686H17.1869V47.002H18.7689V47.7686ZM19.3891 50.8594H18.5102V44.7412H19.3891V50.8594ZM21.3471 53.1543H15.2924V52.3877H21.3471V53.1543ZM16.2152 52.7979H15.2924V50.3125H16.2152V52.7979ZM17.4262 49.4629H14.0082V45.4199H17.4262V49.4629ZM14.8822 48.7402H16.5619V46.1523H14.8822V48.7402ZM28.9842 49.8047H22.8807V49.0625H28.9842V49.8047ZM29.8875 52.2754H21.8797V51.5186H29.8875V52.2754ZM26.3328 51.8555H25.41V49.4385H26.3328V51.8555ZM28.8963 46.0107H23.8279V49.3506H22.8807V45.2539H28.8963V46.0107ZM28.701 47.8809H23.5398V47.1387H28.701V47.8809ZM37.4221 53.3496H36.4992V44.5752H37.4221V53.3496ZM36.7678 48.5352H34.2678V47.7734H36.7678V48.5352ZM31.3967 47.4902H33.6574V45.2637H34.5656V51.1768H30.4641V45.2637H31.3967V47.4902ZM33.6574 50.4248V48.2275H31.3967V50.4248H33.6574ZM42.6471 45.8203C42.6471 46.4323 42.4827 47.0068 42.1539 47.5439C41.8284 48.0778 41.3938 48.5303 40.8502 48.9014C40.3066 49.2725 39.7125 49.5296 39.068 49.6729L38.6529 48.8965C39.2096 48.7858 39.732 48.5775 40.2203 48.2715C40.7086 47.9655 41.0992 47.596 41.3922 47.1631C41.6852 46.7301 41.8316 46.2826 41.8316 45.8203V45.166H42.6471V45.8203ZM42.8082 45.8203C42.8082 46.2793 42.9563 46.7269 43.2525 47.1631C43.5488 47.5993 43.9426 47.972 44.4342 48.2812C44.9257 48.5872 45.4482 48.7923 46.0016 48.8965L45.5865 49.6729C44.9485 49.5296 44.3577 49.2741 43.8141 48.9062C43.2704 48.5384 42.8342 48.0859 42.5055 47.5488C42.1767 47.0117 42.0123 46.4355 42.0123 45.8203V45.166H42.8082V45.8203ZM46.3727 52.1777H38.3648V51.4111H46.3727V52.1777Z"
        fill={color}
      />
    </svg>
  );
}

export function QABus({color}: ColorProps) {
  return (
    <svg
      width="60"
      height="55"
      viewBox="0 0 60 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 34H20.413C20.1709 34 19.9387 33.9038 19.7674 33.7326C19.5962 33.5613 19.5 33.3291 19.5 33.087V23.5C19.5 20.7152 20.6062 18.0445 22.5754 16.0754C24.5445 14.1062 27.2152 13 30 13C31.3789 13 32.7443 13.2716 34.0182 13.7993C35.2921 14.3269 36.4496 15.1004 37.4246 16.0754C38.3996 17.0504 39.1731 18.2079 39.7007 19.4818C40.2284 20.7557 40.5 22.1211 40.5 23.5C40.5 24.8789 40.2284 26.2443 39.7007 27.5182C39.1731 28.7921 38.3996 29.9496 37.4246 30.9246C36.4496 31.8996 35.2921 32.6731 34.0182 33.2007C32.7443 33.7284 31.3789 34 30 34Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.6293 45.3574V45.4648C20.6228 46.181 20.6 46.8239 20.5609 47.3936C20.5251 47.96 20.4405 48.6159 20.307 49.3613L19.5258 49.2734C19.6299 48.7591 19.7048 48.2741 19.7504 47.8184C19.7992 47.3626 19.8285 46.9574 19.8383 46.6025C19.8513 46.2477 19.8578 45.8327 19.8578 45.3574V45.123H14.5063V44.4883H20.6293V45.3574ZM21.5766 51.0605H13.6664V50.4258H16.7719V47.3203H17.5238V50.4258H21.5766V51.0605ZM26.4402 48.3945H22.368V44.3711H26.4402V48.3945ZM23.1199 47.7793H25.6883V45.0059H23.1199V47.7793ZM29.077 49.8594H28.3152V43.6191H29.077V49.8594ZM29.3504 51.998H23.4715V49.2539H24.2332V51.3633H29.3504V51.998ZM37.3488 52.3105H36.5871V47.4766H34.507V50.1133H30.5031V44.293H31.2746V46.5586H33.7551V44.293H34.507V46.8418H36.5871V43.6094H37.3488V52.3105ZM33.7551 49.4785V47.1738H31.2746V49.4785H33.7551ZM42.7203 44.8887C42.7203 45.3607 42.8782 45.818 43.1939 46.2607C43.513 46.7002 43.9215 47.0745 44.4195 47.3838C44.9176 47.6898 45.4221 47.89 45.9332 47.9844L45.5816 48.6289C45.1389 48.5247 44.7027 48.3555 44.273 48.1211C43.8434 47.8867 43.4576 47.597 43.1158 47.252C42.774 46.9069 42.512 46.5277 42.3297 46.1143C42.1474 46.5244 41.8854 46.902 41.5436 47.2471C41.2018 47.5921 40.816 47.8835 40.3863 48.1211C39.9599 48.3555 39.5237 48.5247 39.0777 48.6289L38.7262 47.9844C39.2372 47.8835 39.7402 47.6816 40.235 47.3789C40.7298 47.0729 41.1334 46.7002 41.4459 46.2607C41.7617 45.8213 41.9195 45.3639 41.9195 44.8887V44.2246H42.7203V44.8887ZM46.3434 51.1094H38.3941V50.4746H46.3434V51.1094Z"
        fill={color}
      />
    </svg>
  );
}

export function MyPage({color}: ColorProps) {
  return (
    <svg
      width="60"
      height="57"
      viewBox="0 0 60 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="20" r="6.5" stroke={color} stroke-width="2" />
      <path
        d="M40.5 34.5C40.5 34.8573 40.3377 35.2779 39.8795 35.7489C39.4168 36.2246 38.6985 36.6987 37.733 37.1185C35.8051 37.9567 33.0718 38.5 30 38.5C26.9282 38.5 24.1949 37.9567 22.267 37.1185C21.3015 36.6987 20.5832 36.2246 20.1205 35.7489C19.6623 35.2779 19.5 34.8573 19.5 34.5C19.5 34.1427 19.6623 33.7221 20.1205 33.2511C20.5832 32.7754 21.3015 32.3013 22.267 31.8815C24.1949 31.0433 26.9282 30.5 30 30.5C33.0718 30.5 35.8051 31.0433 37.733 31.8815C38.6985 32.3013 39.4168 32.7754 39.8795 33.2511C40.3377 33.7221 40.5 34.1427 40.5 34.5Z"
        stroke={color}
        stroke-width="2"
      />
      <path
        d="M13.9104 53.084H9.90644V47.4883H13.9104V53.084ZM10.6486 52.459H13.1486V48.1035H10.6486V52.459ZM16.2639 50.0762H17.7189V50.7402H16.2639V55.291H15.5021V46.6094H16.2639V50.0762ZM24.9459 55.3105H24.1744V46.6094H24.9459V55.3105ZM20.3268 47.2832C20.7564 47.2865 21.1389 47.4134 21.4742 47.6641C21.8095 47.9115 22.0715 48.263 22.2604 48.7188C22.4492 49.1745 22.5436 49.7051 22.5436 50.3105C22.5436 50.916 22.4492 51.4466 22.2604 51.9023C22.0715 52.3581 21.8095 52.7096 21.4742 52.957C21.1389 53.2044 20.7564 53.3281 20.3268 53.3281C19.8971 53.3281 19.513 53.2044 19.1744 52.957C18.8391 52.7096 18.5771 52.3581 18.3883 51.9023C18.2027 51.4466 18.11 50.916 18.11 50.3105C18.11 49.7051 18.2027 49.1745 18.3883 48.7188C18.5771 48.263 18.8391 47.9115 19.1744 47.6641C19.5097 47.4134 19.8938 47.2865 20.3268 47.2832ZM20.3268 47.9668C20.037 47.9701 19.7799 48.0693 19.5553 48.2646C19.3339 48.4567 19.1614 48.7301 19.0377 49.085C18.914 49.4365 18.8521 49.8451 18.8521 50.3105C18.8521 50.776 18.914 51.1862 19.0377 51.541C19.1614 51.8926 19.3355 52.1644 19.5602 52.3564C19.7848 52.5485 20.0403 52.6445 20.3268 52.6445C20.6132 52.6445 20.8687 52.5485 21.0934 52.3564C21.318 52.1644 21.4921 51.8926 21.6158 51.541C21.7395 51.1862 21.8014 50.776 21.8014 50.3105C21.8014 49.8451 21.7395 49.4365 21.6158 49.085C21.4921 48.7301 21.318 48.4567 21.0934 48.2646C20.872 48.0693 20.6165 47.9701 20.3268 47.9668ZM33.501 55.291H32.7588V46.6094H33.501V55.291ZM31.8018 54.832H31.0693V50.6035H29.8584V49.9102H31.0693V46.8242H31.8018V54.832ZM30.1123 48.3574H29.3799V52.376C29.7412 52.3499 30.0505 52.319 30.3076 52.2832L30.3564 52.8496C29.305 53.0449 27.863 53.1426 26.0303 53.1426L25.9326 52.4883C26.32 52.4883 26.626 52.4867 26.8506 52.4834V48.3574H26.1182V47.7227H30.1123V48.3574ZM27.5537 52.4688C27.9346 52.459 28.3057 52.4443 28.667 52.4248V48.3574H27.5537V52.4688ZM41.4311 55.3105H40.6596V46.6094H41.4311V55.3105ZM36.8119 47.2832C37.2416 47.2865 37.6241 47.4134 37.9594 47.6641C38.2947 47.9115 38.5567 48.263 38.7455 48.7188C38.9343 49.1745 39.0287 49.7051 39.0287 50.3105C39.0287 50.916 38.9343 51.4466 38.7455 51.9023C38.5567 52.3581 38.2947 52.7096 37.9594 52.957C37.6241 53.2044 37.2416 53.3281 36.8119 53.3281C36.3822 53.3281 35.9981 53.2044 35.6596 52.957C35.3243 52.7096 35.0622 52.3581 34.8734 51.9023C34.6879 51.4466 34.5951 50.916 34.5951 50.3105C34.5951 49.7051 34.6879 49.1745 34.8734 48.7188C35.0622 48.263 35.3243 47.9115 35.6596 47.6641C35.9949 47.4134 36.379 47.2865 36.8119 47.2832ZM36.8119 47.9668C36.5222 47.9701 36.265 48.0693 36.0404 48.2646C35.8191 48.4567 35.6465 48.7301 35.5229 49.085C35.3992 49.4365 35.3373 49.8451 35.3373 50.3105C35.3373 50.776 35.3992 51.1862 35.5229 51.541C35.6465 51.8926 35.8207 52.1644 36.0453 52.3564C36.2699 52.5485 36.5255 52.6445 36.8119 52.6445C37.0984 52.6445 37.3539 52.5485 37.5785 52.3564C37.8031 52.1644 37.9773 51.8926 38.101 51.541C38.2247 51.1862 38.2865 50.776 38.2865 50.3105C38.2865 49.8451 38.2247 49.4365 38.101 49.085C37.9773 48.7301 37.8031 48.4567 37.5785 48.2646C37.3572 48.0693 37.1016 47.9701 36.8119 47.9668ZM45.6209 49.2754C45.6209 49.7539 45.7267 50.2308 45.9383 50.7061C46.1499 51.1781 46.4347 51.5996 46.7928 51.9707C47.1541 52.3385 47.548 52.6152 47.9744 52.8008L47.5447 53.4062C47.0337 53.1719 46.573 52.8187 46.1629 52.3467C45.7527 51.8714 45.4467 51.3359 45.2449 50.7402C45.0431 51.3783 44.7371 51.9561 44.327 52.4736C43.9201 52.988 43.4692 53.3704 42.9744 53.6211L42.5154 53.0156C42.9256 52.8171 43.3081 52.5176 43.6629 52.1172C44.021 51.7168 44.3074 51.266 44.5223 50.7646C44.7371 50.2601 44.8462 49.7637 44.8494 49.2754V48.1426H42.7986V47.5078H47.6912V48.1426H45.6209V49.2754ZM49.6736 55.291H48.9021V46.6094H49.6736V55.291Z"
        fill={color}
      />
    </svg>
  );
}
