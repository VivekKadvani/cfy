
export async function GET(req, res) {
    // Get the command to execute
    const command = 'ls';
    console.log("yes calling");

    // Execute the command
    const runCommand = async (command) => {
        const { stdout, stderr } = await new Promise((resolve, reject) => {
            const childProcess = require('child_process');
            childProcess.exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({ stdout, stderr });
                }
            });
        });

        return { stdout, stderr };
    };
    const { stdout, stderr } = runCommand(command)
    // Check for errors
    if (stderr) {
        console.error(`Command execution error: ${stderr}`);
        return Response.json({ error: 'Command execution error' });
    } else {
        console.log(`Command output: ${stdout}`);
        return Response.json({ output: stdout });
    }
}
