import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from 'D:/桌面/大学报告、论文、实验/HIT-ICES/platform/Front/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import('../../layouts/index.js'),
        })
      : require('../../layouts/index.js').default,
    routes: [
      {
        path: '/common/appConst',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../common/appConst.js'),
            })
          : require('../common/appConst.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/common/createDataset',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../common/createDataset.js'),
            })
          : require('../common/createDataset.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/common/exploreDataset',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../common/exploreDataset.js'),
            })
          : require('../common/exploreDataset.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/common/formElement',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../common/formElement.js'),
            })
          : require('../common/formElement.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/common/previewDataset',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../common/previewDataset.js'),
            })
          : require('../common/previewDataset.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/datasetList',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('D:/桌面/大学报告、论文、实验/HIT-ICES/platform/Front/src/pages/datasetList/models/datasetlist.js').then(
                  m => {
                    return { namespace: 'datasetlist', ...m.default };
                  },
                ),
              ],
              component: () => import('../datasetList/index.js'),
            })
          : require('../datasetList/index.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/digitalTwins/dataChange',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../digitalTwins/dataChange.js'),
            })
          : require('../digitalTwins/dataChange.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/digitalTwins',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../digitalTwins/index.js'),
            })
          : require('../digitalTwins/index.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/equipment/addData',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../equipment/addData.js'),
            })
          : require('../equipment/addData.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/equipment/addEquipment',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../equipment/addEquipment.js'),
            })
          : require('../equipment/addEquipment.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/equipment/addModel',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../equipment/addModel.js'),
            })
          : require('../equipment/addModel.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/equipment/deviceList',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../equipment/deviceList.js'),
            })
          : require('../equipment/deviceList.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/equipment/equipmentExample',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../equipment/equipmentExample.js'),
            })
          : require('../equipment/equipmentExample.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/equipment/equipmentGateway',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../equipment/equipmentGateway.js'),
            })
          : require('../equipment/equipmentGateway.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/equipment/equipmentList',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../equipment/equipmentList.js'),
            })
          : require('../equipment/equipmentList.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/equipment/equipmentModel',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../equipment/equipmentModel.js'),
            })
          : require('../equipment/equipmentModel.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/importFile',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('D:/桌面/大学报告、论文、实验/HIT-ICES/platform/Front/src/pages/importFile/models/importFile.js').then(
                  m => {
                    return { namespace: 'importFile', ...m.default };
                  },
                ),
              ],
              component: () => import('../importFile/index.js'),
            })
          : require('../importFile/index.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../index.js'),
            })
          : require('../index.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/lab',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('D:/桌面/大学报告、论文、实验/HIT-ICES/platform/Front/src/pages/lab/models/center.js').then(
                  m => {
                    return { namespace: 'center', ...m.default };
                  },
                ),
                import('D:/桌面/大学报告、论文、实验/HIT-ICES/platform/Front/src/pages/lab/models/train.js').then(
                  m => {
                    return { namespace: 'train', ...m.default };
                  },
                ),
              ],
              component: () => import('../lab/index.js'),
            })
          : require('../lab/index.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/modelCenter/modelManage',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../modelCenter/modelManage.js'),
            })
          : require('../modelCenter/modelManage.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/modelCenter/modelTrain',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../modelCenter/modelTrain.js'),
            })
          : require('../modelCenter/modelTrain.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/modelCenter/modelTrainDesign',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../modelCenter/modelTrainDesign.js'),
            })
          : require('../modelCenter/modelTrainDesign.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/modelCenter/modelTrainList',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../modelCenter/modelTrainList.js'),
            })
          : require('../modelCenter/modelTrainList.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        path: '/uploadFile',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('D:/桌面/大学报告、论文、实验/HIT-ICES/platform/Front/src/pages/uploadFile/models/uploadFile.js').then(
                  m => {
                    return { namespace: 'uploadFile', ...m.default };
                  },
                ),
              ],
              component: () => import('../uploadFile/index.js'),
            })
          : require('../uploadFile/index.js').default,
        _title: 'ices',
        _title_default: 'ices',
      },
      {
        component: () =>
          React.createElement(
            require('D:/桌面/大学报告、论文、实验/HIT-ICES/platform/Front/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: 'ices',
        _title_default: 'ices',
      },
    ],
    _title: 'ices',
    _title_default: 'ices',
  },
  {
    component: () =>
      React.createElement(
        require('D:/桌面/大学报告、论文、实验/HIT-ICES/platform/Front/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: 'ices',
    _title_default: 'ices',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
