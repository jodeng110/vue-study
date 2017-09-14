import Vue from 'vue'
import Router from 'vue-router'
import Introduce from '@/spa/Introduce/Introduce'
import Practice from '@/spa/Practice/Practice'
import Further from '@/spa/Further/Further'

import DeclarativeRendering from '@/spa/Practice/components/DeclarativeRendering'
import ConditionalsAndLoops from '@/spa/Practice/components/ConditionalsAndLoops'
import HandlingUserInput from '@/spa/Practice/components/HandlingUserInput'
import ComposingWithComponent from '@/spa/Practice/components/ComposingWithComponent'
import LifecycleComponent from '@/spa/Practice/components/Lifecycle'

Vue.use(Router);

const intro = {
  path: '/intro',
  name: "Intro",
  component: Introduce
};

const practice = {
  path: '/practice',
  name: "Practice",
  redirect: '/practice/declarative-rendering',
  component: Practice,
  children: [
    {
      path: 'declarative-rendering',
      component: DeclarativeRendering
    },
    {
      path: 'conditionals-and-loops',
      component: ConditionalsAndLoops
    },
    {
      path: 'handling-user-input',
      component: HandlingUserInput
    },
    {
      path: 'composing-with-component',
      component: ComposingWithComponent
    },
    {
      path: 'lifecycle',
      component: LifecycleComponent
    },
    
  ]
};

const further = {
  path: '/further',
  name: 'Further',
  component: Further
};

const router = new Router({
  routes: [
    {path: '/', redirect: '/intro'},
    intro,
    practice,
    further
  ]
});

export default router
