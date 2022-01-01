const onClickAdd = () => {
  //テキストボックスの入力値を保存し，初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li 作成
  const li = document.createElement("li");

  // div 作成
  const div = document.createElement("div");
  div.className = "list-row";

  // p 作成
  const p = document.createElement("p");
  p.innerText = inputText;

  //完了ボタンを作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => alert("完了"));

  //削除ボタンを作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deletTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deletTarget);
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
