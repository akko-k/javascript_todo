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

  // divタブの中にpタブを入れる
  div.appendChild(p);

  // liタブの中にdivタブを入れる
  li.appendChild(div);
  console.log(li);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};
document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
