import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'

import FaceSelect from '../components/FaceMatching/FaceSelect'
import FaceFinal from '../components/FaceMatching/FaceFinal'
import MindQuestion from '../components/MindMatching/MindQuestion'
import MatchDetail from '../components/MindMatching/MatchDetail'
import MindMatchingList from '../components/MindMatching/MindMatchingList'
import PreferenceQuestion from '../components/InfoRegistration/PreferenceQuestion'
import BasicInfoList from '../components/InfoRegistration/BasicInfoList'
import MyDataAgree from '../components/IntroAgree/MyDataAgree'
import RequestList from '../components/RequestList'

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/m",
            component: Main
        },
        {
            path: "/faceSelect", 
            name: "FaceSelect",
            component: FaceSelect
        },
        {
            path: "/faceFinal",
            name: "FaceFinal", 
            component: FaceFinal,
            props: true
        },
        {
            path: "/mindQuestion",
            name: "MindQuestion",
            component: MindQuestion
        },
        {
            path: "/matchDetail",
            name: "MatchDetail",
            component: MatchDetail,
            props: true
        },
        {
            path: "/mindMatchingList",
            name: "MindMatchingList",
            component: MindMatchingList
        },
        {
            path: "/preferenceQuestion",
            name: "PreferenceQuestion",
            component: PreferenceQuestion
        },
        {
            path: "/basicInfoList",
            name: "BasicInfoList",
            component: BasicInfoList
        },
        {
            path: "/myDataAgree",
            name: "MyDataAgree",
            component: MyDataAgree
        },
        {
            path: "/requestList",
            name : "RequestList",
            component: RequestList
        }

    ]
})