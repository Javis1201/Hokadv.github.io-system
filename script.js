fetch('data.csv')
  .then(response => response.text())
  .then(csvText => {
    // 解析 CSV 文本，处理数据
    console.log(csvText);
  })
  .catch(error => console.error('Error fetching CSV file:', error));
