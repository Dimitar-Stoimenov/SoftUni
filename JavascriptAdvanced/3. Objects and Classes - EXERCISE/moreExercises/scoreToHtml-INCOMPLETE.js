function solve(input) {
    let arr = JSON.parse(input)

    let html = '<table>\n'

    html += '   <tr>'

    for (const key in arr[0]) {
        html += '<th>' + key + '</th>'
    }

    html += '</tr>\n'

    for (const obj of arr) {
        html += '   <tr>'
        html += '<td>' + obj.name + '</td>'
        html += '<td>' + obj.score + '</td>'
        html += '</tr>\n'
    }

    html += '</table>'

    console.log(escapeHtml(html))

    function escapeHtml(html) {
        return html
        .replace(/&/g, '&amp;')
        .replace(/"/g, escape('"'))
        .replace(/,/g, escape(','))
    }
}

solve(
    ['[{"name":"Pesho","score":479},{ "name": "Gosho", "score": 205 }]']
)