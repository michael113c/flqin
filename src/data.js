import eJm from './assets/logo_jm.png';
import eLt from './assets/logo_lt.png';
import eZh from './assets/logo_zh.png';
import dHome from './assets/d_home.svg';
import dSkills from './assets/d_skills.svg';
import dExp from './assets/d_exp.svg';
import dWorks from './assets/d_works.svg';
import dContact from './assets/d_contact.svg';
import sGithub from './assets/s_github.svg';
import sSf from './assets/s_sf.svg';
import sBlog from './assets/s_blog.svg';
import sZh from './assets/s_zh.svg';
import sJj from './assets/s_Jj.svg';
import wJm from './assets/w_jm.jpg';
import wLs from './assets/w_ls.jpg';

export default {
  cn: {
    header: {
      langList: ['中'],
      titleList: [
        {
          svg: dHome,
          title: '首页'
        },
        {
          svg: dSkills,
          title: '能力'
        },
        {
          svg: dExp,
          title: '经历'
        },
        {
          svg: dWorks,
          title: '作品集'
        },
        {
          svg: dContact,
          title: '联系我'
        }
      ]
    },
    footer: ['Released under the MIT License', 'All Rights Reserved ', `Copyright © 2014-${new Date().getFullYear()} Korey Zhao`],
    overview: {
      infoList: ['本科', '上海', '在职', '3.5年'],
      quote: '时刻保持热情，保持专注，放眼未来。',
      desList: ['我叫李豆豆，前端工程师', '中信网科前端', 'seifer2010@163.com']
    },
    skill: {
      outCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(121,100,102,0.8)'
          },
          name: 'vue'
        },
        {
          bg: {
            backgroundColor: 'rgba(49,65,82,0.8)'
          },
          name: 'react'
        },
        {
          bg: {
            backgroundColor: 'rgba(76,157,160,0.8)'
          },
          name: 'angular'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: 'nodejs'
        }
      ],
      innerCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(171,209,220,0.8)'
          },
          name: '优化'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: '测试'
        },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: '部署'
        }
      ],
      desList: [
        '3年前端开发经验',
        '实际开发过多平台项目（APP，PC，H5）',
        '前端技术栈均有尝试'
      ]
    },
    exp: {
      expList: [
        {
          title: '中信网科',
          time: '2017年4月~至今',
          post: '前端工程师/前端',
          contentList: [ '参与公司app(原生混合以及webapp)及CMS开发', '编写常用组件', '维护公用库']
        }
      ]
    },
    works: {
      worksList: [
        {
          title: 'XX银行APP',
          des: 'XX银行手机银行app'
        },
        {
          title: 'XX银行CMS',
          des: 'XX银行CMS。'
        },
        {
          title: '幂缘',
          des: '社交类wepapp'
        }]
    },
    contact: {
      title: '联系我',
      desList1: ['灵感', '代码', '梦想', '未来'],
      desList2: ['注重效率，偏爱敏捷开发', '喜欢尝试，期待新鲜事物', '前端即兴趣，兴趣即未来', '行路有良友，便是捷径', '带上我吧，一起看到更大的世界'],
      download: '下载简历',
      fileList: [
        {
          title: 'HTML版',
          url: 'www.baidu.com'
        },
        {
          title: 'PDF版',
          url: 'www.baidu.com'
        }
      ],
      typeList: [
        {
          icon: sGithub,
          url: 'https://github.com/michael113c'
        }
      ]
    }
  }
};
