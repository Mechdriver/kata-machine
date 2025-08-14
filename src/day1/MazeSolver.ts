const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    seen: boolean[][],
    path: Point[],
    wall: string,
    curr: Point,
    end: Point,
): boolean {
    if (curr.x < 0 || curr.x >= maze[0].length) {
        return false;
    }

    if (curr.y < 0 || curr.y >= maze.length) {
        return false;
    }

    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    if (seen[curr.y][curr.x]) {
        return false;
    }

    seen[curr.y][curr.x] = true;

    path.push(curr);

    for (let i = 0; i < dir.length; ++i) {
        const [x, y] = dir[i];

        if (
            walk(
                maze,
                seen,
                path,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
            )
        ) {
            return true;
        }
    }

    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, seen, path, wall, start, end);

    return path;
}
