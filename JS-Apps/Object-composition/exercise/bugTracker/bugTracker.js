function bugTracker() {

    const sortings = {

        'ID': (a, b) => a.ID - b.ID,
        'author': (a, b) => a.author.localeCompare(b.author),
        'severity': (a, b) => a.severity - b.severity,
    }

    const format = x => {

        let div = document.createElement('div');
        div.setAttribute('id', `report_${x.ID}`);
        div.classList.add('report');

        let bodyDiv = document.createElement('div');
        bodyDiv.classList.add('body');

        let descP = document.createElement('p');
        descP.innerHTML = x.description;
        bodyDiv.appendChild(descP);

        div.appendChild(bodyDiv);

        let titleDiv = document.createElement('title');
        titleDiv.classList.add('title');
        let authorSpan = document.createElement('span');
        authorSpan.classList.add('author');
        authorSpan.innerHTML = `Submitted by: ${x.author}`
        titleDiv.appendChild(authorSpan);

        let statusSpan = document.createElement('span');
        statusSpan.classList.add('status');
        statusSpan.innerHTML = `${x.status} | ${x.severity}`;
        titleDiv.appendChild(statusSpan);

        div.appendChild(titleDiv);

        return div;
    }

    return {

        selector: undefined,
        reportId: 0,
        reports: [],

        report: function(author, description, reproducible, severity) {

            let report = {
                ID: this.reportId++,
                author,
                description,
                reproducible,
                severity,
                status: 'Open'
            }

            this.reports.push(report);
            this.reports.sort(sortings['ID']);
            this._refreshVisualizedData();
        },

        setStatus: function(id, newStatus) {
            this.reports[id].status = newStatus;
            this._refreshVisualizedData();
        },

        remove: function(id) {
            this.reports.splice(id, 1);
            this._refreshVisualizedData();
        },

        sort: function(method) {
            this.reports.sort(sortings[method]);
            this._refreshVisualizedData();
        },

        output: function(selector) {
            this.selector = selector;
        },

        _refreshVisualizedData: function() {
            let outputElement = document.querySelector(this.selector);
            outputElement.innerHTML = '';
            this.reports.map(format).forEach(x => outputElement.appendChild(x));
        }
    }
}

let tracker = bugTracker();

tracker.output('#content');
tracker.report('guy', 'report content', true, 5);
tracker.report('second guy', 'report content 2', true, 3);
tracker.report('abv', 'report content three', true, 4);

tracker.remove(1);