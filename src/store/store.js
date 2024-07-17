import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentNews: {},
    allNews: [
      {
        title: 'Цена вопроса не важна когда солнечных дней всё меньше',
        date: '20.05.2024',
        content: 'Как уже неоднократно упомянуто, действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Картельные сговоры не допускают ситуации',
        link: '/news'
      },
      {
        title: 'Цена вопроса',
        date: '20.12.2024',
        content: 'Как уже неоднократно упомянуто, действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Картельные сговоры не допускают ситуации',
        link: '/news'
      },
      {
        title: 'Цена вопроса не важна когда солнечных дней всё меньше',
        date: '20.05.2024',
        content: 'Как уже неоднократно упомянуто, действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Картельные сговоры не допускают ситуации',
        link: '/news'
      },
      {
        title: 'Цена вопроса не важна когда солнечных дней всё меньше',
        date: '20.05.2024',
        content: 'Как уже неоднократно упомянуто, действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Картельные сговоры не допускают ситуации',
        link: '/news'
      },
      {
        title: 'Цена вопроса не важна когда солнечных дней всё меньше',
        date: '20.05.2024',
        content: 'Как уже неоднократно упомянуто, действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Картельные сговоры не допускают ситуации',
        link: '/news'
      },
      {
        title: 'Цена вопроса не важна когда солнечных дней всё меньше',
        date: '20.05.2024',
        content: 'Как уже неоднократно упомянуто, действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Картельные сговоры не допускают ситуации',
        link: '/news'
      },
      {
        title: 'Цена вопроса не важна когда солнечных дней всё меньше',
        date: '20.05.2024',
        content: 'Как уже неоднократно упомянуто, действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Картельные сговоры не допускают ситуации',
        link: '/news'
      },
      {
        title: 'Цена вопроса не важна когда солнечных дней всё меньше',
        date: '20.05.2024',
        content: 'Как уже неоднократно упомянуто, действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Картельные сговоры не допускают ситуации',
        link: '/news'
      },
      {
        title: 'Цена вопроса не важна когда солнечных дней всё меньше',
        date: '20.05.2024',
        content: 'Как уже неоднократно упомянуто, действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Картельные сговоры не допускают ситуации',
        link: '/news'
      }
    ]
  },
  getters : {
    currentNews: (state) => state.currentNews,
    allNews: (state => state.allNews)
  },
  mutations: {
    SET_CURRENT_NEWS(state, payload) {
      state.currentNews = payload;
    }
  }
})