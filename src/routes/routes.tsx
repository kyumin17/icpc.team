import _ from "lodash";

import { MainPage } from "../app/main-page/main-page";
import { ContactPage } from "../app/contact-page/contact-page";
import { IntroductionPage } from "../app/introduction-page/introduction-page";
import { SpcPage } from "../app/spc-page/spc-page";
import { HistoryPage } from "../app/history-page/history-page";
import { CleanWaterCupPage } from "../app/clean-water-cup-page/clean-water-cup-page";
import K512ApplyPage from "../app/k512-25-apply-page/k512-25-apply-page";
import {Spc24ApplyPage} from "../app/spc-24-apply-page/spc-24-apply-page";
// import { Spc24ApplyPage } from "../app/spc-24-apply-page/spc-24-apply-page";

const _routes = {
  "/": {
    component: <MainPage />,
  },
  main: {
    component: <MainPage />,
  },
  introduction: {
    component: <IntroductionPage />,
  },
  history: {
    component: <HistoryPage />,
  },
  spc: {
    component: <SpcPage />,
  },
  spc24Apply: {
    component: <Spc24ApplyPage />,
  },
  applyK512: {
    component: <K512ApplyPage />,
  },
  contact: {
    component: <ContactPage />,
  },
  cleanWaterCup: {
    component: <CleanWaterCupPage />,
  },
} as const;

const customKebab = (string: string) => {
  return string
  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
  .replace(/[\s_]+/g, '-')
  .toLowerCase();
}

export const buildRoutesArray = (routes: {
  [k: string]: {
    component: React.ReactNode;
  };
}): {
  path: string;
  component: React.ReactNode;
}[] => {
  return Object.entries(_routes).map(([route, { component }]) => {
    const kebabPath = customKebab(route);
    return {
      path: kebabPath.startsWith("/") ? kebabPath : `/${kebabPath}`,
      component,
    };
  });
};

export const routes = Object.entries(_routes).reduce(
  (acc, [route, { component }]) => {
    const kebabPath = _.kebabCase(route);
    return {
      [route]: {
        component,
        path: () => (kebabPath.startsWith("/") ? kebabPath : `/${kebabPath}`),
      },
      ...acc,
    };
  },
  {}
) as {
  [k in keyof typeof _routes]: {
    component: React.ReactNode;
    path: () => string;
  };
};
