import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";
  createIncompleatList(inputText);
};

//未完了リストに追加する関数
const createIncompleatList = (text) => {
  //li生成
  const li = document.createElement("li");

  //div生成
  const div = document.createElement("div");
  div.className = "list_row";

  //TODOテキスト生成
  const TODO_text = document.createElement("p");
  TODO_text.innerText = text;

  //button(完了)タグ生成
  const compleat_button = document.createElement("button");
  compleat_button.innerText = "完了";
  compleat_button.addEventListener("click", () => {
    //押された完了ボタンの親タグ(li)を未完了リストから削除
    const deleatTarget = div.parentNode;
    deleateFromIncompleatList(deleatTarget);

    //完了リストに追加する要素
    const removeTarget = div.parentNode;
    const addTarget = compleat_button.parentNode;
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;
    console.log(addTarget);

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグの生成
    const back_button = document.createElement("button");
    back_button.innerText = "戻す";
    back_button.addEventListener("click", () => {
      const deleatTarget = div.parentNode;
      document.getElementById("compleat_list").removeChild(deleatTarget);

      //テキストの取得
      const text = back_button.parentNode.firstElementChild.innerText;
      createIncompleatList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(TODO_text);
    addTarget.appendChild(back_button);
    document.getElementById("compleat_list").appendChild(removeTarget);
  });

  //button(削除)タグ生成
  const deleat_button = document.createElement("button");
  deleat_button.innerText = "削除";
  deleat_button.addEventListener("click", () => {
    //押された削除ボタンの親タグ（li）を未完了リストから削除
    const deleatTarget = div.parentNode;
    deleateFromIncompleatList(deleatTarget);
  });

  //子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(TODO_text);
  div.appendChild(compleat_button);
  div.appendChild(deleat_button);

  //未完了リストから指定の要素を削除
  const deleateFromIncompleatList = (taeget) => {
    document.getElementById("incompleat_list").removeChild(taeget);
  };

  //未完了のリストに追加
  document.getElementById("incompleat_list").appendChild(li);
};
document
  .getElementById("add_Button")
  .addEventListener("click", () => onClickAdd());
