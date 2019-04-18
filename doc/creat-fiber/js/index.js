const createSVG = (tag) => (document.createElementNS('http://www.w3.org/2000/svg', tag));

const svgWidth = 1400;
const svgHeight = 850;
const rectWidth = 160;
const rectHeight = 60;

const transformX = 1400;
const rectList = [{
    //  x y偏移量
    transform: {
        x: (svgWidth - rectWidth) * 0.5,
        y: 0
    },
    //  节点文本
    text: 'HostRoot',
    lines: [{
        //  路径起点
        start: [svgWidth * 0.5 - 30, rectHeight],
        //  路径终点。减5是箭头的高度
        end: [svgWidth * 0.5 - 30, rectHeight + 90 - 15],
        text: 'child',
        color: 'red'
    }, {
        start: [svgWidth * 0.5 + 30, 150],
        end: [svgWidth * 0.5 + 30, rectHeight + 15],
        text: 'return',
        color: '#00FF04'
    }]
}, {
    transform: {
        x: (svgWidth - rectWidth) * 0.5,
        y: 150
    },
    text: 'ClassComponent',
    lines: [{
        start: [svgWidth * 0.5 - 30, rectHeight + 150],
        end: [svgWidth * 0.5 - 30, rectHeight + 90 - 15 + 150],
        text: 'child',
        color: 'red'
    }, {
        start: [svgWidth * 0.5 + 30, 150 * 2],
        end: [svgWidth * 0.5 + 30, rectHeight + 15 + 150],
        text: 'return',
        color: '#00FF04'
    }]
}, {
    transform: {
        x: (svgWidth - rectWidth) * 0.5,
        y: 150 * 2
    },
    text: 'div.level1',
    lines: [{
        start: [svgWidth * 0.5 - 30, rectHeight + 150 * 2],
        end: [svgWidth * 0.5 - 30, rectHeight + 90 - 15 + 150 * 2],
        text: 'child',
        color: 'red'
    }, {
        start: [svgWidth * 0.5 + 30, 150 * 3],
        end: [svgWidth * 0.5 + 30, rectHeight + 15 + 150 * 2],
        text: 'return',
        color: '#00FF04'
    }, {
        start: [svgWidth * 0.5 - 80, rectHeight + 150 * 2 - 50],
        end: [svgWidth * 0.5 - 30 - 300, rectHeight + 90 - 15 + 150 * 2],
        text: 'child',
        color: 'red'
    }, {
        start: [svgWidth * 0.5 - 80 - 200, rectHeight + 80 + 150 * 2],
        end: [svgWidth * 0.5 - 100, rectHeight + 150 * 2 - 10],
        text: 'return',
        color: '#00FF04'
    }, {
        start: [svgWidth * 0.5 - 80 + 160, rectHeight + 150 * 2 - 10],
        end: [svgWidth * 0.5 - 40 + 300, rectHeight + 90 - 15 + 150 * 2],
        text: 'child',
        color: 'red'
    }, {
        start: [svgWidth * 0.5 + 40 + 300, rectHeight + 90 - 15 + 150 * 2],
        end: [svgWidth * 0.5 - 60 + 160, rectHeight + 150 * 2 - 40],
        text: 'return',
        color: '#00FF04'
    }]
}, {
    transform: {
        x: (svgWidth - rectWidth) * 0.5 - 300,
        y: 150 * 3
    },
    text: 'button.level2-btn',
    lines: [{
        start: [svgWidth * 0.5 - 220, rectHeight + 90 + 150 * 2 + 30],
        end: [svgWidth * 0.5 - 100, rectHeight + 90 + 150 * 2 + 30],
        text: 'sibling',
        color: 'blue'
    }]
}, {
    transform: {
        x: (svgWidth - rectWidth) * 0.5,
        y: 150 * 3
    },
    text: 'div.level2-div1',
    lines: [{
        start: [svgWidth * 0.5 - 30, rectHeight + 150 * 3],
        end: [svgWidth * 0.5 - 30, rectHeight + 90 - 15 + 150 * 3],
        text: 'child',
        color: 'red'
    }, {
        start: [svgWidth * 0.5 + 30, 150 * 4],
        end: [svgWidth * 0.5 + 30, rectHeight + 15 + 150 * 3],
        text: 'return',
        color: '#00FF04'
    }, {
        start: [svgWidth * 0.5 + 80, rectHeight + 90 + 150 * 2 + 30],
        end: [svgWidth * 0.5 + 200, rectHeight + 90 + 150 * 2 + 30],
        text: 'sibling',
        color: 'blue'
    }]
}, {
    transform: {
        x: (svgWidth - rectWidth) * 0.5 + 300,
        y: 150 * 3
    },
    text: 'div.level2-div2',
    lines: [{
        start: [svgWidth * 0.5 + 270, rectHeight + 150 * 3],
        end: [svgWidth * 0.5 + 270, rectHeight + 90 - 15 + 150 * 3],
        text: 'child',
        color: 'red'
    }, {
        start: [svgWidth * 0.5 + 330, 150 * 4],
        end: [svgWidth * 0.5 + 330, rectHeight + 15 + 150 * 3],
        text: 'return',
        color: '#00FF04'
    }]
}, {
    transform: {
        x: (svgWidth - rectWidth) * 0.5,
        y: 150 * 4
    },
    text: 'div.level3-div',
    lines: [{
        start: [svgWidth * 0.5 - 80, rectHeight + 150 * 4 - 40],
        end: [svgWidth * 0.5 - 210, rectHeight + 90 - 15 + 150 * 4],
        text: 'child',
        color: 'red'
    }, {
        start: [svgWidth * 0.5 - 170, rectHeight + 90 - 15 + 150 * 4],
        end: [svgWidth * 0.5 - 90, rectHeight + 150 * 4],
        text: 'return',
        color: '#00FF04'
    }, {
        start: [svgWidth * 0.5 + 80, rectHeight + 150 * 4],
        end: [svgWidth * 0.5 + 170, rectHeight + 90 - 15 + 150 * 4],
        text: 'child',
        color: 'red'
    }, {
        start: [svgWidth * 0.5 + 230, rectHeight + 90 - 15 + 150 * 4 + 10],
        end: [svgWidth * 0.5 + 100, rectHeight + 150 * 4 - 30],
        text: 'return',
        color: '#00FF04'
    }]
}, {
    transform: {
        x: (svgWidth - rectWidth) * 0.5 + 300,
        y: 150 * 4
    },
    text: 'p.level3-p'
}, {
    transform: {
        x: (svgWidth - rectWidth) * 0.5 - 200,
        y: 150 * 5
    },
    text: 'p.level4-p1',
    lines: [{
        start: [svgWidth * 0.5 - 120, rectHeight + 90 + 150 * 4 + 30],
        end: [svgWidth * 0.5 + 100, rectHeight + 90 + 150 * 4 + 30],
        text: 'sibling',
        color: 'blue'
    }]
}, {
    transform: {
        x: (svgWidth - rectWidth) * 0.5 + 200,
        y: 150 * 5
    },
    text: 'p.level4-p2'
}];

const getSVGChildren = () => {
    const res = [];

    rectList.forEach(({ transform, text, lines = [] }) => {
        const groupNode = createSVG('g');
        groupNode.setAttribute('transform', `translate(${transform.x},${transform.y})`);

        const rectNode = createSVG('rect');
        rectNode.setAttribute('rx', 20);
        rectNode.setAttribute('ry', 20);
        rectNode.setAttribute('width', rectWidth);
        rectNode.setAttribute('height', rectHeight);
        rectNode.setAttribute('fill', '#F78A4A');

        const textNode = createSVG('text');
        textNode.setAttribute('x', rectWidth * 0.5);
        textNode.setAttribute('y', rectHeight * 0.5);
        textNode.setAttribute('dominant-baseline', 'middle');
        textNode.setAttribute('text-anchor', 'middle');
        textNode.setAttribute('fill', '#FFF');
        textNode.textContent = text;

        lines.forEach((line) => {
            const lineGroupNode = createSVG('g');
            const lineNode = createSVG('line');
            lineNode.setAttribute('stroke', line.color || '#000');
            lineNode.setAttribute('fill', 'none');
            lineNode.setAttribute('stroke-width', 2);
            lineNode.setAttribute('marker-end', 'url(#markerArrow)');
            lineNode.setAttribute('x1', line.start[0]);
            lineNode.setAttribute('y1', line.start[1]);
            lineNode.setAttribute('x2', line.end[0]);
            lineNode.setAttribute('y2', line.end[1]);

            const lineTextNode = createSVG('text');
            lineTextNode.setAttribute('x', (line.start[0] + line.end[0]) * 0.5);
            lineTextNode.setAttribute('y', (line.start[1] + line.end[1]) * 0.5);
            lineTextNode.setAttribute('dominant-baseline', 'middle');
            lineTextNode.setAttribute('text-anchor', 'middle');
            lineTextNode.setAttribute('stroke', 'black');
            lineTextNode.setAttribute('filter', 'url(#solid)');
            lineTextNode.textContent = line.text;

            lineGroupNode.appendChild(lineNode);
            lineGroupNode.appendChild(lineTextNode);
            res.push(lineGroupNode);
        });

        groupNode.appendChild(rectNode);
        groupNode.appendChild(textNode);
        res.push(groupNode);
    });
    return res;
}

window.onload = () => {
    const svg = document.getElementById('mind');
    svg.setAttribute('width', svgWidth);
    svg.setAttribute('height', svgHeight);
    svg.setAttribute('style', 'margin-top: 20px;');
}

let index = 0;
const addNode = () => {
    const svgChildren = getSVGChildren();
    if (index == svgChildren.length) {
        return;
    }

    const svg = document.getElementById('mind');
    //  svgChildren.forEach((item) => svg.appendChild(item));
    svg.appendChild(svgChildren[index++]);
}