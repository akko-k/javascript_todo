const onClickAdd = () => {
  //テキストボックスの入力値を保存し，初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  // li 作成
  const li = document.createElement("li");

  // div 作成
  const div = document.createElement("div");
  div.className = "list-row";

  // p 作成
  const p = document.createElement("p");
  p.innerText = text;

  //完了ボタンを作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    // 完了要素に追加する要素
    const addTarget = completeButton.parentNode.parentNode;
    // TODO内容テキスト
    const text = addTarget.firstElementChild.firstElementChild.innerText;
    // li以下を初期化
    addTarget.textContent = null;

    // div 作成
    const div = document.createElement("div");
    div.className = "list-row";
    // p 作成
    const p = document.createElement("p");
    p.innerText = text;

    //戻すボタンを作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 未完了要素に戻す要素
      const backTarget = backButton.parentNode.parentNode;
      // 完了リストから削除
      document.getElementById("complete-list").removeChild(backTarget);

      // TODO内容テキスト
      const text = backTarget.firstElementChild.firstElementChild.innerText;
      createIncompleteList(inputText);
    });

    // divタブの中にpタブを入れる
    div.appendChild(p);
    div.appendChild(backButton);
    // addTargetの中にdivタブを入れる
    addTarget.appendChild(div);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  //削除ボタンを作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // divタブの中にpタブを入れる
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // liタブの中にdivタブを入れる
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
