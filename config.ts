import type { FooterCategory } from "@/components/Footer";
import type { AuthorData } from "@/types";

export const urlBase = new URL(
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000",
);

export const domain = "https://jinniuai.com";

export const footer: FooterCategory[] = [
  {
    title: "盈利模方",
    items: [
      {
        label: "博客",
        href: "/blog/",
      },
      {
        label: "隐私权声明",
        href: "/privacy/",
      },
      {
        label: "使用条款",
        href: "/terms/",
      },
    ],
  },
  {
    title: "支持我们",
    items: [
      {
        label: "微博",
        href: "https://weibo.com/u/7811272301",
        newWindow: true,
      },
      {
        label: "知乎",
        href: "https://www.zhihu.com/people/26-24-79-65",
        newWindow: true,
      },
      {
        label: "雪球",
        href: "https://xueqiu.com/u/9827075864",
        newWindow: true,
      },
      {
        label: "微信",
        href: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI3NzA4MjcyMA==&scene=124#wechat_redirect",
        newWindow: true,
      },
    ],
  },
  {
    title: "其他",
    items: [
      {
        label: "想法实现",
        href: "https://tz.jinniuai.com/idea/create",
        newWindow: true,
      },
      {
        label: "投资能力库",
        href: "https://tz.jinniuai.com/principleLibrary",
        newWindow: true,
      },
      {
        label: "投资助手库",
        href: "https://tz.jinniuai.com/train/list",
        newWindow: true,
      },
      {
        label: "bug报告",
        href: "https://github.com/markqiu/profitable_cube_website1/issues/new",
        newWindow: true,
      },
    ],
  },
];

/**
 * a list of blog file names
 */
export const blogRecommendations = [
  "welcome-to-v3",
  "fix-music-lag",
  "discord-bot-troubleshooting",
  "how-to-invite-bot",
];

export const blogAuthors: Record<string, AuthorData> = {
  kane: {
    name: "Kane Wang",
    title: "YEE式機器龍作者",
    url: "https://bento.me/kanewang",
    image_url: "/blog/kane50613.jpg",
  },
  wolf: {
    name: "Wolf yuan 狼苑",
    title: "黑貓音樂機器人作者 兼 機器人伺服器管理",
    url: "https://github.com/wolf-yuan-6115",
    image_url: "/blog/WolfYuan.png",
  },
  kay: {
    name: "美味的小圓 Kay Xue",
    title: "Yeecord 以前的小幫手",
    url: "https://github.com/Kayxue",
    image_url: "/blog/kay.jpg",
  },
  nathan: {
    name: "Nathan",
    title: "Yeecord 現任管理員 兼 ZeitFrei 合作機器人作者",
    url: "https://github.com/Nat1anWasTaken/",
    image_url: "/blog/nathan.jpg",
  },
  money: {
    name: "Fuma",
    title: "Yeecord 網站的前端工程師",
    url: "https://fuma-dev.vercel.app",
    image_url: "/blog/money.jpg",
  },
  taipei: {
    name: "Taipei101",
    title: "Yeecord 網路工程師 兼 台北 101 網路股份有限公司創始人",
    url: "https://taipei101.xyz",
    image_url: "/blog/taipei.jpg",
  },
};
