
var HEIGHT = 5;
var WIDTH = 5;
var TOPICS = ["Taxes",
			"Freedom",
			"Healthcare",
			"Immigration",
			"Terrorism",
			"Veterans",
			"Heroes",
			"Fence",
			"Socialism",
			"Gerrymandering",
			"Goldman-Sachs",
			"Email",
			"Radical",
			"Black Lives Matter",
			"Obama",
			"Lead",
			"Trillion",
			"Climate Change",
			"Future",
			"Hope",
			"College",
			"America",
			"Roe v. Wade",
			"Supreme Court",
			"ISIS",
			"Middle East",
			"Wall Street",
			"Vote",
			"North Korea",
			"War",
			"Ninety-nine Percent",
			"One Percent",
			"The Media",
			"Education",
			"No Child Left Behind",
			"Fracking",
			"Crisis",
			"Ronald Reagan",
			"Founding Fathers",
			"The Constitution",
			"The Middle Class",
			"Billionaires",
			"Christian Nation",
			"God",
			"Faith",
			"Obamacare",
			"Men and Women in Uniform",
			"Veterans",
			"Citizens United",
			"Paid leave",
			"Debt"]; //note: add bounds check for big boards / short topic arrays

//fischer-yates shuffle -- taken from https://bost.ocks.org/mike/shuffle
function shuffle(array)
{
	var m = array.length, t, i;
	while (m)
	{
		i = Math.floor(Math.random() * m--);
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	return array;
}

function isCenterCell(i,j)
{
	if (i==Math.floor(HEIGHT/2) && j==Math.floor(WIDTH/2))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function makeTable()
{
	var table = document.createElement("table");
	for (var i=0; i<HEIGHT; i++)
	{
		var row = document.createElement("tr");
		for (var j=0; j<WIDTH; j++)
		{
			var cell = document.createElement("td");
			cell.setAttribute("id","r"+i+"c"+j);
			if (!isCenterCell(i,j))
			{
				cell.onclick = toggle;
			}
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	return table;
}

function labelTable(table,labels)
{
	var k=0;
	for (var i=0; i<table.rows.length; i++)
	{
		var row = table.rows[i];
		for (var j=0; j<row.cells.length;j++)
		{
			var cell = row.cells[j];
			if (isCenterCell(i,j))
			{
				cell.textContent="*";
				toggleCell(cell);
			}
			else
			{
				cell.textContent = labels[k++];
			}
		}
	}
}

function prepare()
{
	var board = document.getElementById("board");
	var table = makeTable();
	var labels = shuffle(TOPICS);
	labelTable(table,labels);
	board.appendChild(table);
}

function toggleCell(cell)
{
	cell.classList.toggle("clicked");
}

function toggle() //this should be inline, not separate function
{
	toggleCell(this);
}

function main()
{
	prepare();
}

window.onload = main;