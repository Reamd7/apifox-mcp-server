import dotenv from 'dotenv';
import { EndpointMCPServer } from './server/EndpointMCPServer';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import * as commander from 'commander';

const program = commander.program.version(process.env.VERSION ?? "0.1.0", "-V, --version").name("Apifox Mcp Server").description("Apifox Mcp Server");
program
  .option("-t, --token <token>", "Apifox User Access Token")
  .action(async (options: commander.Command & { token: string }) => {
    dotenv.config();

    const token = options.token || process.env.APIFOX_USER_ACCESS_TOKEN || "";
    if (!token) {
      // console.log('APIFOX_USER_ACCESS_TOKEN environment variable is not set, please set it in .env');
      program.help();
      process.exit(1);
    }
    const mcpServer = new McpServer({
      name: `Apifox MCP Server`,
      version: process.env.VERSION ?? "0.1.0",
      description: 'Apifox MCP Server',
      capabilities: {
        tool: true,
      }
    });
    new EndpointMCPServer(mcpServer, token).registerTools();
    const transport = new StdioServerTransport();
    await mcpServer.connect(transport).catch(e => {
      // console.log('Failed to create mcp server', e);
      process.exit(1);
    });
  })
  .parse()