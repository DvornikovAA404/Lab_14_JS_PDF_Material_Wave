document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generateBtn");
    generateBtn.addEventListener("click", generatePDF);
  });
  
  function generatePDF() {
    const element = document.getElementById("app");
    const root = document.documentElement;
    
    // Сохраняем исходный цвет
    const originalColor = getComputedStyle(root).color;

    // Устанавливаем чёрный цвет текста
    root.style.color = "black";

    // Генерируем PDF
    html2pdf()
        .set({
            margin: 10,
            filename: "resume.pdf",
            html2canvas: { 
                scale: 2,
                onclone: (clonedDoc) => {
                    // Дополнительно меняем цвет в клоне документа
                    clonedDoc.documentElement.style.color = "black";
                }
            },
            jsPDF: { format: "a4", orientation: "portrait" }
        })
        .from(element)
        .save()
        .then(() => {
            // Восстанавливаем исходный цвет
            root.style.color = originalColor;
        })
        .catch((err) => {
            console.error("Ошибка:", err);
            root.style.color = originalColor;
        });
}