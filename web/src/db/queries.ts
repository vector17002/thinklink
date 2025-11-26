import { db } from "./index";
import { users, workflows, workflowSteps } from "./schema";
import { eq, and } from "drizzle-orm";

/**
 * User operations
 */
export const userOperations = {
  async getUserById(id: number) {
    return db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id),
      with: {
        workflows: true,
      },
    });
  },

  async getUserByEmail(email: string) {
    return db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    });
  },

  async createUser(name: string, email: string, password: string) {
    const result = await db
      .insert(users)
      .values({ name, email, password })
      .returning();
    return result[0];
  },

  async updateUser(id: number, updates: Partial<typeof users.$inferInsert>) {
    const result = await db
      .update(users)
      .set(updates)
      .where(eq(users.id, id))
      .returning();
    return result[0];
  },

  async deleteUser(id: number) {
    await db.delete(users).where(eq(users.id, id));
  },
};

/**
 * Workflow operations
 */
export const workflowOperations = {
  async getWorkflowsByUserId(userId: number) {
    return db.query.workflows.findMany({
      where: (workflows, { eq }) => eq(workflows.userId, userId),
      with: {
        steps: true,
      },
    });
  },

  async getWorkflowById(id: number) {
    return db.query.workflows.findFirst({
      where: (workflows, { eq }) => eq(workflows.id, id),
      with: {
        user: true,
        steps: true,
      },
    });
  },

  async createWorkflow(
    userId: number,
    name: string,
    description?: string
  ) {
    const result = await db
      .insert(workflows)
      .values({
        userId,
        name,
        description,
      })
      .returning();
    return result[0];
  },

  async updateWorkflow(
    id: number,
    updates: Partial<typeof workflows.$inferInsert>
  ) {
    const result = await db
      .update(workflows)
      .set(updates)
      .where(eq(workflows.id, id))
      .returning();
    return result[0];
  },

  async deleteWorkflow(id: number) {
    await db.delete(workflows).where(eq(workflows.id, id));
  },
};

/**
 * Workflow steps operations
 */
export const workflowStepOperations = {
  async getStepsByWorkflowId(workflowId: number) {
    return db.query.workflowSteps.findMany({
      where: (workflowSteps, { eq }) => eq(workflowSteps.workflowId, workflowId),
    });
  },

  async createStep(
    workflowId: number,
    stepNumber: number,
    actionType: string,
    config?: string
  ) {
    const result = await db
      .insert(workflowSteps)
      .values({
        workflowId,
        stepNumber,
        actionType,
        config,
      })
      .returning();
    return result[0];
  },

  async updateStep(
    id: number,
    updates: Partial<typeof workflowSteps.$inferInsert>
  ) {
    const result = await db
      .update(workflowSteps)
      .set(updates)
      .where(eq(workflowSteps.id, id))
      .returning();
    return result[0];
  },

  async deleteStep(id: number) {
    await db.delete(workflowSteps).where(eq(workflowSteps.id, id));
  },
};
