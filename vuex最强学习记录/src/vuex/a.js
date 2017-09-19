export default {
  state: {
    list: [
      {id: 0, text: '西班牙驱逐朝鲜大使'},
      {id: 1, text: '日本间谍九一八纪念日在华被捕'},
      {id: 2, text: '钱还完了？有供应商称贾跃亭'},
      {id: 3, text: '刘强东接受外媒专访'},
      {id: 4, text: '郭明錤又来预测了'},
      {id: 5, text: '华为怒怼苹果！Mate 10才是'},
      {id: 6, text: '哪些美国人愿意用iPhone？'},
      {id: 7, text: '工商总局近日将约谈苹果'},
      {id: 8, text: '格力否认入股一汽夏利'}
    ]
  },
  getters: {
    count: state => state.list.length
  },
  mutations: {
    deleteEvent (state, obj) {
      if (state.list.length > 1) {
        if (obj.index) this.state.b.index--;
        state.list.splice(obj.index, 1);
      }
    }
  }
};
